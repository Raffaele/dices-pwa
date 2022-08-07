<script lang="ts">
  import SingleDice from "./SingleDice.svelte";
  export let dices: number[];
  let diceInterface: SingleDice[] = [];
  function run() {
    diceInterface.forEach((singeDice) => singeDice.run());
  }
</script>

<div class="field">
  {#each dices as maxDice, i}
    <SingleDice attempt={20} max={maxDice} bind:this={diceInterface[i]} />
  {/each}
</div>
<button on:click={run}>GO!</button>
<button>EDIT</button>

<style>
  .field {
    display: flex;
    justify-content: space-evenly;
  }
</style>
