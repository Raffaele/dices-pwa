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

<div class:running={isRunning}>{value}/{max}</div>

<style>
  div {
    font-size: 4em;
  }
  .running {
    color: darkgray;
  }
</style>
