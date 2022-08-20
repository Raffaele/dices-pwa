<script lang="ts">
  import EditIcon from "../assets/edit-btn.svg";
  import RunIcon from "../assets/launch-btn.svg";
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
  <div>
    <div class="field-dices">
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
    </div>
    {#if isEditMode}
      <DiceCreator on:createVaule />
    {/if}
  </div>

  <section class="cmd-section">
    {#if isEditMode}
      <button on:click={save} class="cmd-btn cmd-save">SAVE</button>
    {:else}
      <button on:click={edit} class="cmd-btn">
        <img src={EditIcon} alt="edit" />
      </button>
      <button on:click={run} disabled={isRunning} class="cmd-btn cmd-rerun">
        <img src={RunIcon} alt="Run" />
      </button>
    {/if}
  </section>
</div>

<style>
  .field {
    padding: 1vh 2vw 0;
  }
  .field-dices {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  img {
    width: 20px;
  }
  .cmd-section {
    display: flex;
    justify-content: space-evenly;
  }
  .cmd-btn:disabled {
    opacity: 0.5;
  }
  .cmd-rerun {
    padding-top: 0.1em;
    padding-left: 0.2em;
  }
  .cmd-save {
    width: auto;
    height: auto;
    border-radius: 10px;
    padding: 1vh 2vw;
  }
</style>
