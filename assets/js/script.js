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


// botao = document.querySelector("button");
// botao.addEventListener("click", () =>{
//     renderComments();
// })


