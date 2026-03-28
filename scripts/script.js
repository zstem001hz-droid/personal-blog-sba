// alert('JS connected');

// STATE AND DOM SECTION //

// Memory Array //
let posts = [];

// New Posts //
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

console.log('DOM refs:', {
  postForm, titleInput, contentInput,
  titleError, contentError, postsContainer,
  submitBtn, cancelBtn, formHeading
});
