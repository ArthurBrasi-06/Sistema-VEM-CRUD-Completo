# Sistema-VEM-CRUD-Completo
Projeto desenvolvido para a disciplina de Desenvolvimento Web, com foco em criação de um sistema funcional utilizando HTML, CSS, JavaScript (Fetch API), PHP (API REST) e MySQL.

📁 Funcionalidades Implementadas
✔️ CRUD Completo – 3 Tabelas

Usuário

Criar

Listar

Excluir

Evento

Criar

Listar

Excluir

Página do Evento

Criar

Listar

Excluir

Todas as operações realizam comunicação via Fetch API → PHP → MySQL.

<img width="1918" height="1027" alt="image" src="https://github.com/user-attachments/assets/6a4a1478-d03c-408d-a0e1-39f4682d895a" />

 
🧩 🛠️ Tecnologias Utilizadas

- Frontend

- HTML5

- CSS3 (layout moderno baseado em cards e tabelas responsivas)

- JavaScript (Fetch API para requisições assíncronas)

- Backend

- PHP (API REST simples com JSON)

- MySQL (relacional com PK e FK)

- Banco de Dados

- Tabelas normalizadas


Relacionamento: usuario (1) ---- (N) evento (1) ---- (N) pagina_do_evento

<img width="1919" height="943" alt="image" src="https://github.com/user-attachments/assets/b543a167-fdff-4741-86fd-e495213680d3" />

📂 🔧 Estrutura do Projeto

<img width="304" height="583" alt="image" src="https://github.com/user-attachments/assets/089414c3-820f-488f-ab32-d1f5cce94789" />


## 🗄️ Estrutura do Banco de Dados (DDL)

O arquivo `DDL.sql` define a estrutura do banco de dados, incluindo:

* Criação da database `vem`.
* Estruturas para as tabelas:
    * `usuario`
    * `evento`
    * `pagina_do_evento`
* Configuração de Chaves **Primárias** e **Estrangeiras**.
* Definição de **Auto Increment** nas chaves primárias.

---

## 🧪 Dados Iniciais de Teste (DML)

O arquivo `DML.sql` insere registros de teste no banco de dados para iniciar o sistema:

* **3** Registros de Usuários.
* **3+** Registros de Eventos.
* **3+** Registros de Páginas de Evento.

> **Nota:** Estes dados são carregados automaticamente ao importar o script, permitindo o uso imediato dos CRUDs.

---

## 🔄 Fluxo de Funcionamento (Full Stack)

1.  **HTML/CSS:** Fornece a interface (formulários) e o layout.
2.  **JavaScript (Fetch):**
    * Captura os dados dos formulários.
    * Envia requisições assíncronas (via `fetch`) para a API PHP.
    * *Exemplo:*
        ```javascript
        fetch("api/evento_insert.php", {
            method: "POST",
            body: formData
        });
        ```
3.  **PHP (API):**
    * Recebe os dados da requisição (`POST`, `GET`, etc.).
    * Executa as consultas SQL apropriadas.
    * Retorna uma resposta no formato **JSON**.
4.  **MySQL:** Executa o comando **(INSERT, SELECT, UPDATE, DELETE)**.
5.  **Atualização em Tela:** O JavaScript recebe o JSON de retorno e atualiza a interface (tabelas e cards) **dinamicamente**, sem a necessidade de recarregar a página.

---

## 🎨 Design e Layout

O sistema foi desenvolvido com foco em:

* **Layout:** Limpo e totalmente **Responsivo**.
* **Componentes:**
    * Header azul fixo.
    * Menu superior de navegação.
    * **Cards** brancos com sombras para destaque.
    * **Tabelas modernas** com efeito `hover`.
    * Botões estilizados para operações de **Cadastrar** e **Excluir**.

---

## ▶️ Como Executar Localmente (XAMPP)

Siga os passos abaixo para rodar o sistema:

1.  **Localização:** Copie a pasta `Vem_T2` para o diretório raiz do seu servidor web local:
    ```
    C:\xampp\htdocs\
    ```
2.  **Servidor:** Inicie os serviços **Apache** e **MySQL** no painel de controle do XAMPP.
3.  **Banco de Dados:**
    * Acesse o `phpMyAdmin`.
    * Importe primeiro o arquivo **`DDL.sql`** (cria a estrutura).
    * Importe em seguida o arquivo **`DML.sql`** (insere os dados de teste).
4.  **Navegador:** Abra o sistema acessando o seguinte endereço:
    ```
    http://localhost/Vem_T2/index.html
    ```

> O sistema estará funcionando com todos os módulos CRUD após a conclusão destes passos.

---

<img width="1918" height="944" alt="image" src="https://github.com/user-attachments/assets/94e8231e-2eeb-47ec-8722-7d62d267dd96" />


## 🌐 Observação sobre a Entrega/Hospedagem

O *deploy* em serviços de hospedagem gratuitos (como InfinityFree, 000Webhost ou X10Hosting) pode exigir um tempo de propagação de domínio de 24 a 72 horas. Para garantir a entrega no prazo do trabalho, o projeto foi disponibilizado com a pasta completa e os scripts SQL necessários para **rodar localmente via XAMPP**.

---

## 👤 Autor

**Arthur Brasi**

* *Aluno de Desenvolvimento de Software*
* *Profissional focado em tecnologia, inovação e criação de soluções digitais.*


