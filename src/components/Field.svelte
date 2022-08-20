<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import DiceCreator from "./DiceCreator.svelte";
  import SingleDice from "./SingleDice.svelte";
  export let dices: number[];
  export let isEditMode: boolean;
  let diceInterface: SingleDice[] = [];

  $: dicesData = dices.map((maxValue) => ({ maxValue, isRunning: false }));

  const dispatch = createEventDispatcher();

  function run() {
    diceInterface.forEach((singeDice) => singeDice?.run());
  }

  function edit() {
    dispatch("edit");
  }

  function save() {
    dispatch("save");
  }

  $: isRunning = dicesData.some(({ isRunning }) => isRunning);
</script>

<div class="field">
  {#each dicesData as dice, i}
    <SingleDice
      attempt={20}
      max={dice.maxValue}
      bind:this={diceInterface[i]}
      {isEditMode}
      on:isRuningChange={({ detail }) => (dice.isRunning = detail)}
      on:delete={() => dispatch("deleteDice", i)}
    />
  {/each}
  {#if isEditMode}
    <DiceCreator on:createVaule />
  {/if}
</div>

{#if isEditMode}
  <button>+</button>
  <button on:click={save}>SAVE</button>
{:else}
  <button on:click={edit}>EDIT</button>
  <button on:click={run} disabled={isRunning}>GO!</button>
{/if}

<style>
  .field {
    display: flex;
    justify-content: space-evenly;
  }
</style>
