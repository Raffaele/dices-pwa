<slot />

<style>
  :root {
    --primary-color: white;
    --secondary-color: green;
  }

  :global(body) {
    background-color: rgb(100 200 100);
    margin: 0;
  }

  :global(h1) {
    margin-top: 0;
    margin-bottom: 0;
  }

  :global(#app) {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
</style>
