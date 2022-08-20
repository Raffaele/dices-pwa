<script lang="ts">
  import { getRandomNumberElement } from "../lib/get-random-number-element";

  import { createEventDispatcher } from "svelte";
  import DiceCreator from "./DiceCreator.svelte";
  import SingleDice from "./SingleDice.svelte";
  export let dices: number[];
  export let isEditMode: boolean;
  let diceInterface: SingleDice[] = [];

  $: dicesData = dices.map((maxValue) => ({ maxValue, isRunning: false }));

  const dispatch = createEventDispatcher();
  let attempt = 20;

  $: isRunning = dicesData.some(({ isRunning }) => isRunning);

  $: {
    if (!isRunning) {
      attempt = getRandomNumberElement([18, 19, 20, 21, 22, 23]);
    }
  }

  function run() {
    diceInterface.forEach((singeDice) => singeDice?.run());
  }

  function edit() {
    dispatch("edit");
  }

  function save() {
    dispatch("save");
  }
</script>

<div class="field">
  {#each dicesData as dice, i}
    <SingleDice
      {attempt}
      max={dice.maxValue}
      bind:this={diceInterface[i]}
      {isEditMode}
      isDeleteBtnAvailable={dices.length > 1}
      on:isRuningChange={({ detail }) => (dice.isRunning = detail)}
      on:delete={() => dispatch("deleteDice", i)}
    />
  {/each}
  {#if isEditMode}
    <DiceCreator on:createVaule />
  {/if}
</div>

{#if isEditMode}
  <button on:click={save}>SAVE</button>
{:else}
  <button on:click={edit}>EDIT</button>
  <button on:click={run} disabled={isRunning}>GO!</button>
{/if}

<style>
  .field {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
</style>
