import { writable } from "svelte/store";

export const currentPage = writable('home');
export const users = writable([]);
export const currentUsers = writable(null);
export const transacao = writable([]);

users.subscribe(v => {
    const user = v.at(-1);
    
    if (!user) return;

    const formData = new FormData();
    formData.append('username', user.username);
    formData.append('password', user.pw);

    fetch('http://localhost:8000/add-user.php', {
        method: 'POST',
        body: formData
    }); // non blocking
    console.log('oi');
})

export function addTransacao(descricao, valor, categoria, users_id) {
    const formData = new FormData();
    formData.append('descricao', descricao);
    formData.append('valor', valor);
    formData.append('categoria', categoria); 
    formData.append('users_id', users_id);

    fetch('http://localhost:8000/add-transacao.php', {
        method: 'POST',
        body: formData
    });

    loadTransacao(users_id)
}

export async function removeTransacao(id, users_id) {
    await fetch('http://localhost:8000/remove-transacao.php?id=' + id, {
        method: 'GET'
    });
    loadTransacao(users_id)
}

async function loadTransacao(users_id) {
    // console.log('deve carregar as transações do usuário ' + user_id)
    const response = await fetch('http://localhost:8000/get-transacao.php?user_id=' + users_id, {
        method: 'GET'
    });
    const data = await response.json();
    transacao.set(data);
}

export const login = async (username, pw) => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', pw);
    const response = await fetch('http://localhost:8000/login.php', {
        method: 'POST',
        body: formData
    });
    if (!response.ok) {
        alert('usuário ou senha incorretos');
        return;
    }
    const data = await response.json();
    currentUsers.set(data);
    loadTransacao(data.id)
}