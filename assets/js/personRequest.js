const select = document.getElementById("routes");
const inputID = document.getElementById("inputId");
const btnSearchId = document.getElementById("searchId");
const response = document.getElementById("response-container");

// Função correta para buscar por ID
async function fetchId(route, id) {
    if (!id) return null;
    const res = await fetch(`https://jsonplaceholder.typicode.com/${route}/${id}`);
    return await res.json();
}

// Função de render
function render(data, route) {
    const container = document.getElementById("response-container");
    container.innerHTML = ""; // limpa antes de renderizar

    if (!data) {
        container.innerHTML = "<p>ID não encontrado</p>";
        return;
    }

    // Renderiza dependendo da rota selecionada
    if (route === "users") {
        // Se for usuário
        const user = data; // pode ser um objeto único ou array de 1
        const usersArray = Array.isArray(user) ? user : [user];

        usersArray.forEach(u => {
            const div = document.createElement("div");
            div.innerHTML = `
                <h2>${u.name} (@${u.username})</h2>
                <p><strong>Email:</strong> ${u.email}</p>
                <p><strong>Telefone:</strong> ${u.phone}</p>
                <p><strong>Website:</strong> <a href="http://${u.website}" target="_blank">${u.website}</a></p>
                <p><strong>Endereço:</strong> 
                ${u.address.street}, ${u.address.suite}, 
                ${u.address.city} - ${u.address.zipcode}
                </p>
                <hr>
            `;
            container.appendChild(div);
        });
    } else if (route === "posts") {
        const postsArray = Array.isArray(data) ? data : [data];
        postsArray.forEach(p => {
            const div = document.createElement("div");
            div.innerHTML = `
                <h2>${p.title}</h2>
                <p>${p.body}</p>
                <hr>
            `;
            container.appendChild(div);
        });
    } else if (route === "comments") {
        const commentsArray = Array.isArray(data) ? data : [data];
        commentsArray.forEach(c => {
            const div = document.createElement("div");
            div.innerHTML = `
                <h2>${c.name}</h2>
                <p><strong>Email:</strong> ${c.email}</p>
                <p>${c.body}</p>
                <hr>
            `;
            container.appendChild(div);
        });
    }
}


// Listener do botão
btnSearchId.addEventListener("click", async function() {
    const route = select.value;
    const id = inputID.value.trim();

    if (!id) {
        alert("Digite um ID válido!");
        return;
    }

    const data = await fetchId(route, id);
    render(data, route); // passa também a rota
});
