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


botao = document.querySelector("button");
botao.addEventListener("click", () =>{
    renderPosts();
})
