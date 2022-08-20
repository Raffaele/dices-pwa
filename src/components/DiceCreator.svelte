<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  const options = Array.from({ length: 69 }).map((_, i) => i + 2);
  let selectedValue = 6;
  function addValue() {
    dispatch("createVaule", selectedValue);
  }
</script>

<fieldset>
  <legend>New dice</legend>
  <div>
    <div>MAX</div>
    <select bind:value={selectedValue}>
      {#each options as option}
        <option value={option}>{option}</option>
      {/each}
    </select>
  </div>
  <div role="button" class="cmd-btn add-btn" on:click={addValue}>+</div>
</fieldset>

<style>
  fieldset {
    margin: 2vw;
    border: 2px var(--secondary-color) solid;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    padding: 1vh 3vw 2vh;
  }

  legend {
    color: var(--secondary-color);
  }
</style>
