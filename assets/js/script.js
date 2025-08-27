async function getAllPosts() {
    const api = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await api.json();


    const response = data.slice(0,10).map(posts => ({
        title: posts.title,
        body:posts.body
    }));

    return response;
}

async function renderPosts() {
    const postContainer = document.getElementById("response-container");
    renderPosts.innerHTML = ""; // limpa antes de renderizar
    
    const posts = await getAllPosts();
    

    posts.forEach(posts => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `
        <h2>${posts.title}</h2>
        <p>${posts.body}</p>
        <hr>
        `;
        postContainer.appendChild(postElement);
    });
}


async function getAllComments() {
    const api = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await api.json();

    const response = data.slice(0,10).map(comments =>({
        name:comments.name,
        email:comments.email,
        body:comments.body
    }));
    return response
}


async function renderComments() {
    const commentsContainer = document.getElementById("response-container");
    commentsContainer.innerHTML = ""; // limpa antes de renderizar
    const comments = await getAllComments();

    comments.forEach(comments => {
        const commentsElement = document.createElement("div");
        commentsElement.innerHTML = `
            <h2>${comments.title}</h2>
            <p>${comments.email}</p>
            <p>${comments.body}</p>
            <hr>
        `;
        commentsContainer.appendChild(commentsElement);
    });
}
async function getAllUsers() {
    const api = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await api.json();

    const response = data.slice(0,10).map(users =>({
        name:users.name,
        username:users.username,
        email:users.email,
        address:users.address,
        phone:users.phone,
        website:users.website
    }));
    return response
}


async function renderUsers() {
    const usersContainer = document.getElementById("response-container");
    usersContainer.innerHTML = ""; // limpa antes de renderizar

    const users = await getAllUsers();

    users.forEach(user => {
        const userElement = document.createElement("div");
        userElement.innerHTML = `
           <h2>${user.name} (@${user.username})</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Telefone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
            <p><strong>Endereço:</strong> 
            ${user.address.street}, ${user.address.suite}, 
            ${user.address.city} - ${user.address.zipcode}
            </p>
            <hr>
        `;
        usersContainer.appendChild(userElement);
    });
}



// botao = document.querySelector("button");
// botao.addEventListener("click", () =>{
//     renderComments();
// })

let opcoes = document.querySelector("select");
let button = document.querySelector("button");


button.addEventListener("click", () => {
    let valorSelecionado = opcoes.value;

    seletor();
});


async function seletor(){
    let valorSelecionado = opcoes.value;
        switch (valorSelecionado) {
        case "posts":
            renderPosts();
            break;

        case "comments":
            renderComments();
            break;

        case "users":
            renderUsers();
            break;

        default:
            console.log("azedou")
    }
}