// alert('JS connected');

// STATE AND DOM SECTION //

// Memory Array
let posts = [];

// New Posts
let editingPostId = null;

// DOM REFERENCE //
const postForm = document.getElementById('post-form');
const titleInput = document.getElementById('post-title');
const contentInput = document.getElementById('post-content');
const titleError = document.getElementById('title-error');
const contentError = document.getElementById('content-error');
const postsContainer = document.getElementById('posts-container');
const submitBtn = document.getElementById('submit-btn');
const cancelBtn = document.getElementById('cancel-btn');
const formHeading = document.getElementById('form-heading');

// console.log('DOM refs:', {
//   postForm, titleInput, contentInput,
//   titleError, contentError, postsContainer,
//   submitBtn, cancelBtn, formHeading
// });

// UTILITY FUNCTIONS //
function generateId() {
    return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

// Read posts array
function loadFromStorage() {
    const stored = localStorage.getItem('blog-posts');
    return stored ? JSON.parse(stored) : [];
}

// write posts to array
function savedToStorage() {
    localStorage.setItem('blog-posts', JSON.stringify(posts));
}

// RENDER POSTS //
function renderPosts() {
    postsContainer.innerHTML = '';

if (posts.length === 0) {
    postsContainer.innerHTML = '<p class="no-posts">No posts yet. Write your first one!</p>';
    return;
}

// Render newest posts first
[...posts].reverse().forEach(post => {
    const card = document.createElement('article');
    // Store post's ID on card element
    card.dataset.id = post.id;

    card.innerHtml = `
    <h3>${post.title}</h3>
    <p class="post-meta"${post.timestamp}</p>
    <p class="post-content"?${post.content}</p>
    <div class="post-actions">
    <button class="edit-btn" data=id="${post.id}">Edit</button>
    <button class="delete-btn" data-id="${post.id}">Delete</button>
    </div>
    `;

    postsContainer.appendChild(card);
});

  console.log('renderPosts() called. Current posts array:', posts);
}