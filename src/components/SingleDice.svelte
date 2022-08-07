<script lang="ts">
  import { onDestroy } from "svelte";
  export let max: number;
  export let attempt: number;
  const range = Array.from({ length: max }).map((_, i) => i + 1);
  let value = getRandomElement(range);
  let intervalId: ReturnType<typeof setInterval> | null = null;
  let isRunning = false;
  export function run() {
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

  onDestroy(() => {
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
  });

  function getRandomElement(fullRange: number[], prevNumber = -1) {
    const purgedRange = fullRange.filter((p) => p !== prevNumber);
    const newIndex = Math.trunc(Math.random() * purgedRange.length);
    const newNumber = purgedRange[newIndex];
    return newNumber;
  }

  function getRandomList(
    length: number,
    fullRange: number[],
    initialNumber = -1
  ) {
    let prevNumber = initialNumber;
    return Array.from({ length }).reduce<number[]>((fullList) => {
      prevNumber = getRandomElement(fullRange, prevNumber);
      return [...fullList, prevNumber];
    }, []);
  }
</script>

<div class="single-dice">
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
</style>
