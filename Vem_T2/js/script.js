// ==================== USUÁRIOS ====================

async function cadastrarUsuario() {
    const formData = new FormData();
    formData.append("nome", document.getElementById("nome").value);
    formData.append("email", document.getElementById("email").value);

    try {
        const resposta = await fetch("api/usuario_insert.php", {
            method: "POST",
            body: formData
        });

        const data = await resposta.json();
        alert(data.sucesso ? "Usuário cadastrado!" : "Erro ao cadastrar usuário");
        if (data.sucesso && typeof listarUsuarios === "function") {
            listarUsuarios();
        }
    } catch (e) {
        alert("Erro de comunicação ao cadastrar usuário");
        console.error(e);
    }
}

async function listarUsuarios() {
    try {
        const res = await fetch("api/usuario_select.php");
        const dados = await res.json();

        const tabela = document.getElementById("listaUsuarios");
        if (!tabela) return;

        tabela.innerHTML = "";

        dados.forEach(u => {
            tabela.innerHTML += `
                <tr>
                    <td>${u.id_usuario}</td>
                    <td>${u.nome}</td>
                    <td>${u.email}</td>
                    <td>
                        <button class="btn btn-delete" onclick="deleteUsuario(${u.id_usuario})">
                            Excluir
                        </button>
                    </td>
                </tr>
            `;
        });
    } catch (e) {
        console.error("Erro ao listar usuários:", e);
    }
}

async function deleteUsuario(id) {
    if (!confirm("Deseja realmente excluir este usuário?")) return;

    try {
        await fetch(`api/usuario_delete.php?id=${id}`);
        listarUsuarios();
    } catch (e) {
        console.error("Erro ao excluir usuário:", e);
    }
}

// ==================== EVENTOS ====================

async function cadastrarEvento() {
    const formData = new FormData();
    formData.append("titulo", document.getElementById("titulo").value);
    formData.append("descricao", document.getElementById("descricao").value);
    formData.append("data_evento", document.getElementById("data_evento").value);
    formData.append("local_evento", document.getElementById("local_evento").value);
    formData.append("id_usuario", document.getElementById("id_usuario").value);

    try {
        const resposta = await fetch("api/evento_insert.php", {
            method: "POST",
            body: formData
        });

        const data = await resposta.json();
        alert(data.sucesso ? "Evento cadastrado!" : "Erro ao cadastrar evento");
        if (data.sucesso && typeof listarEventos === "function") {
            listarEventos();
        }
    } catch (e) {
        alert("Erro de comunicação ao cadastrar evento");
        console.error(e);
    }
}

async function listarEventos() {
    try {
        const res = await fetch("api/evento_select.php");
        const dados = await res.json();

        const tabela = document.getElementById("listaEventos");
        if (!tabela) return;

        tabela.innerHTML = "";

        dados.forEach(eve => {
            tabela.innerHTML += `
                <tr>
                    <td>${eve.id_evento}</td>
                    <td>${eve.titulo}</td>
                    <td>${eve.descricao}</td>
                    <td>${eve.data_evento}</td>
                    <td>${eve.local_evento}</td>
                    <td>${eve.criador}</td>
                    <td>
                        <button class="btn btn-delete" onclick="deleteEvento(${eve.id_evento})">
                            Excluir
                        </button>
                    </td>
                </tr>
            `;
        });
    } catch (e) {
        console.error("Erro ao listar eventos:", e);
    }
}

async function deleteEvento(id) {
    if (!confirm("Deseja realmente excluir este evento?")) return;

    try {
        await fetch(`api/evento_delete.php?id=${id}`);
        listarEventos();
    } catch (e) {
        console.error("Erro ao excluir evento:", e);
    }
}

// ==================== PÁGINAS DO EVENTO ====================

async function cadastrarPagina() {
    const formData = new FormData();
    formData.append("id_evento", document.getElementById("id_evento").value);
    formData.append("titulo_pagina", document.getElementById("titulo_pagina").value);
    formData.append("conteudo", document.getElementById("conteudo").value);

    try {
        const resposta = await fetch("api/pagina_insert.php", {
            method: "POST",
            body: formData
        });

        const data = await resposta.json();
        if (data.sucesso) {
            alert("Página cadastrada!");
            if (typeof listarPaginas === "function") {
                listarPaginas();
            }
        } else {
            alert("Erro ao cadastrar página" + (data.erro ? (": " + data.erro) : ""));
        }
    } catch (e) {
        alert("Erro de comunicação ao cadastrar página");
        console.error(e);
    }
}

async function listarPaginas() {
    try {
        const res = await fetch("api/pagina_select.php");
        const dados = await res.json();

        const tabela = document.getElementById("listaPaginas");
        if (!tabela) return;

        tabela.innerHTML = "";

        dados.forEach(p => {
            tabela.innerHTML += `
                <tr>
                    <td>${p.id_pagina}</td>
                    <td>${p.nome_evento}</td>
                    <td>${p.titulo_pagina}</td>
                    <td>${p.conteudo}</td>
                    <td>
                        <button class="btn btn-delete" onclick="deletePagina(${p.id_pagina})">
                            Excluir
                        </button>
                    </td>
                </tr>
            `;
        });
    } catch (e) {
        console.error("Erro ao listar páginas:", e);
    }
}

async function deletePagina(id) {
    if (!confirm("Deseja realmente excluir esta página?")) return;

    try {
        await fetch(`api/pagina_delete.php?id=${id}`);
        listarPaginas();
    } catch (e) {
        console.error("Erro ao excluir página:", e);
    }
}
