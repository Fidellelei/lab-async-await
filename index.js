// Select the ul element
const postList = document.getElementById("post-list");

// Function to display posts
function displayPosts(posts) {
  // Clear existing posts
  postList.innerHTML = "";

  // Loop through posts
  posts.forEach(post => {
    // Create li
    const li = document.createElement("li");

    // Create h1
    const title = document.createElement("h1");
    title.textContent = post.title;

    // Create p
    const body = document.createElement("p");
    body.textContent = post.body;

    // Append h1 and p to li
    li.appendChild(title);
    li.appendChild(body);

    // Append li to ul
    postList.appendChild(li);
  });
}

// Async function to fetch posts
async function getPosts() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await response.json();

    // Call displayPosts
    displayPosts(posts);

  } catch (error) {
    console.error("Error:", error);
  }
}

// Run function
getPosts();