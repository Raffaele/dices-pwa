<script lang="ts">
  import Field from "./Field.svelte";
  let dices = [6];
  // TODO: To change as false before commit
  let isEdit = true;
  function editField() {
    isEdit = true;
  }
  function saveField() {
    isEdit = false;
  }
  function deleteDice(diceIndex: number) {
    dices = dices.filter((_, i) => i !== diceIndex);
  }
</script>

<main>
  <Field
    {dices}
    isEditMode={isEdit}
    on:edit={editField}
    on:save={saveField}
    on:deleteDice={({ detail: diceIndex }) => deleteDice(diceIndex)}
    on:createVaule={(evt) => (dices = [...dices, evt.detail])}
  />
</main>

<style>
  main {
    width: 100%;
    flex: 1;
  }
</style>
