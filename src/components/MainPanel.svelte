<script lang="ts">
  import Field from "./Field.svelte";
</script>

<main>
  <Field dices={[6, 20]} />
</main>

<style>
  main {
    background-color: cyan;
    width: 100%;
    flex: 1;
  }
</style>
