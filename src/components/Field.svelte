<script lang="ts">
  import SingleDice from "./SingleDice.svelte";
  export let dices: number[];
  let diceInterface: SingleDice[] = [];
  function run() {
    diceInterface.forEach((singeDice) => singeDice.run());
  }
</script>

<div>
  {#each dices as maxDice, i}
    <SingleDice attempt={20} max={maxDice} bind:this={diceInterface[i]} />
  {/each}
</div>
<button on:click={run}>GO!</button>
