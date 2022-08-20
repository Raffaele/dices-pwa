<script lang="ts">
  import { getRandomNumberElement } from "../lib/get-random-number-element";

  import { onDestroy, createEventDispatcher } from "svelte";
  export let max: number;
  export let attempt: number;
  export let isEditMode: boolean;
  export let isDeleteBtnAvailable: boolean;

  let value: number;
  $: range = Array.from({ length: max }).map((_, i) => i + 1);
  $: {
    value = getRandomNumberElement(range);
  }

  let intervalId: ReturnType<typeof setInterval> | null = null;
  let isRunning = false;

  const dispatch = createEventDispatcher();
  export function run() {
    if (intervalId) {
      clearInterval(intervalId);
    }
    isRunning = true;
    const list = getRandomList(attempt, range, value);
    let listId = 0;
    intervalId = setInterval(() => {
      value = list[listId++];
      if (listId === list.length) {
        clearInterval(intervalId);
        intervalId = null;
        isRunning = false;
      }
    }, 80);
  }

  $: dispatch("isRuningChange", isRunning);

  onDestroy(() => {
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
  });

  function getRandomList(
    length: number,
    fullRange: number[],
    initialNumber = -1
  ) {
    let prevNumber = initialNumber;
    return Array.from({ length }).reduce<number[]>((fullList) => {
      prevNumber = getRandomNumberElement(fullRange, prevNumber);
      return [...fullList, prevNumber];
    }, []);
  }

  function deleteDice() {
    dispatch("delete");
  }
</script>

<div class="single-dice">
  {#if isEditMode && isDeleteBtnAvailable}
    <div on:click={deleteDice} class="delete-btn">+</div>
  {/if}
  <strong class="dice-max">{max}</strong>
  <div class="dice-value" class:running={isRunning}>{value}</div>
</div>

<style>
  :root {
    --starndard-border-radius: 10px;
    color: white;
  }
  .single-dice {
    display: inline-flex;
    flex-direction: column;
    margin: 2px;
    text-align: center;
    width: 4em;
    position: relative;
    margin: 1.5rem;
  }
  .dice-max {
    background-color: var(--secondary-color);
    border-top-left-radius: var(--starndard-border-radius);
    border-top-right-radius: var(--starndard-border-radius);
  }
  .dice-value {
    font-size: 3em;
    border-bottom-left-radius: var(--starndard-border-radius);
    border-bottom-right-radius: var(--starndard-border-radius);
    border: 1px var(--secondary-color) solid;
    border-top: none;
    background-color: var(--primary-color);
    color: var(--secondary-color);
  }
  .running {
    opacity: 0.35;
  }
  .delete-btn {
    position: absolute;
    color: var(--primary-color);
    background-color: var(--secondary-color);
    right: -20%;
    top: -20%;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    transform: rotate(45deg);
    font-size: 1.5em;
    border: 1px var(--primary-color) solid;
  }
</style>
