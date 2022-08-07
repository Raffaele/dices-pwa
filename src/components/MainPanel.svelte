<script lang="ts">
  import Field from "./Field.svelte";
  let dices = [6, 20];
</script>

<main>
  <Field {dices} />
</main>

<style>
  main {
    width: 100%;
    flex: 1;
  }
</style>
