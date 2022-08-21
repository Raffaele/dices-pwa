<slot />

<style>
  :root {
    --primary-color: white;
    --secondary-color: green;
  }

  :global(body) {
    background-color: #64c864;
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

  :global(.cmd-btn) {
    color: var(--primary-color);
    background-color: var(--secondary-color);
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
    border: 1px var(--primary-color) solid;
    text-align: center;
  }
</style>
