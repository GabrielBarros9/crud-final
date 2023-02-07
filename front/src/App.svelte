<script>
  import Home from "./lib/Home.svelte";
  import Register from "./lib/Register.svelte";
  import Login from "./lib/Login.svelte";
  import Transacao from "./lib/Transacao.svelte";
  import { currentPage, currentUsers } from "./stores";

  function changePage(page) {
    $currentPage = page
  }
</script>

<main>
  <h1>Sistema de Gerenciamento</h1>
  
  <nav>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={() => changePage("home")}>Home</div>
    {#if !$currentUsers}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div on:click={() => changePage("register")}>Cadastrar</div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div on:click={() => changePage("login")}>Login</div>
    {:else}  
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div on:click={() => changePage("transacao")}>Transação</div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div on:click={() => ($currentUsers = null)}>Logout</div>
    {/if}

  </nav>

  <div>
    {#if $currentPage == "home"}
      <Home />
    {:else if $currentPage == "register"}
      <Register />
    {:else if $currentPage == "transacao"}
      <Transacao />
    {:else if $currentPage == "login"}
      <Login />
    {/if}
  </div>
</main>

<style>
  nav {
    display: flex;
    gap: 0.5em;
    justify-content: space-between;
  }
  nav > div {
    border: 1px solid black;
    padding: 0 1em;
    cursor: pointer;
  }
</style>
