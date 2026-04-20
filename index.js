async function fetchPosts() {
  try {
    console.log("Fetching posts...");

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await response.json();

    console.log(posts);

    displayPosts(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

function displayPosts(posts) {
  const ul = document.getElementById("post-list");

  ul.innerHTML = "";

  posts.forEach(post => {
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    h1.textContent = post.title;
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    ul.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fetchPosts();
});
