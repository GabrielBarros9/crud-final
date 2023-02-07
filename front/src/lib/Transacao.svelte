<script>


    import { currentUsers, transacao, addTransacao, removeTransacao } from "../stores";
  
    const form = {
      descricao: "",
      valor: "",
      categoria: "",
    };
  
    function handleForm() {
      
      addTransacao(form.descricao, form.valor, form.categoria, $currentUsers.id)
  
      form.descricao = '';
      form.valor = '';
      form.categoria = '';
      alert('Transação inserida com sucesso;');
    };
  
    function remove(id) {
      removeTransacao(id, $currentUsers.id)
    };
  </script>
  
  {#if $currentUsers}
    <div>
      <h2>Transações</h2>
      
      {#each $transacao as trans}

      <div>{trans.descricao} <a href="remover" on:click|preventDefault={() => remove(trans.id)}>remover</a></div>
      {/each}
      <form on:submit|preventDefault={handleForm}>
        <fieldset>
          <legend>Adicionar transação</legend>
          <input
            type="text"
            name="descrição"
            bind:value={form.descricao}
            placeholder="descrição da transação"
            required
          /> 
          <input
          type="text"
          name="valor"
          bind:value={form.valor}
          placeholder="valor da transação"
          required
          />
          <input
          type="text"
          name="categoria"
          bind:value={form.categoria}
          placeholder="categoria da transação"
          required
          />
          <button>Adicionar</button>
        </fieldset>
      </form>
    </div>
  {/if};
  