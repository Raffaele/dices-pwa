<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  const options = Array.from({ length: 48 }).map((_, i) => i + 2);
  let selectedValue = 2;
  function addValue() {
    dispatch("createVaule", selectedValue);
  }
</script>

<div>
  <select bind:value={selectedValue}>
    {#each options as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
  <button on:click={addValue}>+</button>
</div>
