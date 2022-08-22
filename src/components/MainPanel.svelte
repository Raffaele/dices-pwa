<script lang="ts">
  import { persistentStorage } from "../lib/persistent-storage";

  import Field from "./Field.svelte";
  let fields = persistentStorage.getFields();
  let isEdit = false;
  function editField() {
    isEdit = true;
  }
  function saveField() {
    isEdit = false;
    persistentStorage.saveFields(fields);
  }
  function deleteDice(diceIndex: number) {
    fields = [
      {
        dices: fields[0].dices.filter((_, i) => i !== diceIndex),
      },
    ];
  }

  function addDice(maxValue: number) {
    console.log("prova", maxValue);
    fields = [
      {
        dices: [...fields[0].dices, maxValue],
      },
    ];
  }
</script>

<main>
  <Field
    dices={fields[0].dices}
    isEditMode={isEdit}
    on:edit={editField}
    on:save={saveField}
    on:deleteDice={({ detail: diceIndex }) => deleteDice(diceIndex)}
    on:createVaule={(evt) => addDice(evt.detail)}
  />
</main>

<style>
  main {
    width: 100%;
    flex: 1;
  }
</style>
