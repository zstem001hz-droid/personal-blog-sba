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
function saveToStorage() {
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
        card.classList.add('post-card');
        // Store post's ID on card element
        card.dataset.id = post.id;

        card.innerHTML = `
            <h3>${post.title}</h3>
            <p class="post-meta">${post.timestamp}</p>
            <p class="post-content">${post.content}</p>
            <div class="post-actions">
                <button class="edit-btn" data-id="${post.id}">Edit</button>
                <button class="delete-btn" data-id="${post.id}">Delete</button>
            </div>
        `;

        postsContainer.appendChild(card);
    });

    console.log('renderPosts() called. Current posts array:', posts);
}

// FORM VALIDATION //
function validateForm() {
    let isValid = true;

    // Clear previous error message
    titleError.textContent = '';
    contentError.textContent = '';

    if (titleInput.value.trim() === '') {
        titleError.textContent = 'Post title is required.';
        isValid = false;
    }

    if (contentInput.value.trim() === '') {
        contentError.textContent = 'Post content is required.';
        isValid = false;
    }
    return isValid;
}

// FORM SUBMISSION HANDLER //
postForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!validateForm()) {
        // Validation Failed
        return;
    }

    const titleValue = titleInput.value.trim();
    const contentValue = contentInput.value.trim();

    if (editingPostId === null) {
        // -- CREATE POST -- //
        const newPost = {
            id: generateId(),
            title: titleValue,
            content: contentValue,
            timestamp: new Date().toLocaleString()
        };

        posts.push(newPost);

        console.log('New post created:', newPost);
        console.log('Posts array after add:', posts);

    } else {
        // ENTER EDIT MODE //
        const postIndex = posts.findIndex(p => p.id === editingPostId);

        if (postIndex !== -1) {
            posts[postIndex].title = titleValue;
            posts[postIndex].content = contentValue;
        }
        
        // QUIT EDITING //
        editingPostId = null;
        formHeading.textContent = 'New Post';
        submitBtn.textContent = 'Publish Post';
        cancelBtn.classList.add('hidden');
    }

    saveToStorage();
    renderPosts();
    // Clear form fields
    postForm.reset();

});

// EVENT DELEGATION - EDIT & DELETE //
postsContainer.addEventListener('click', function (event) {
    const target = event.target;

    // DELETE //
    if (target.classList.contains('delete-btn')) {
        const idToDelete = target.dataset.id;

        console.log('Delete clicked. Target ID:', idToDelete);

        posts = posts.filter(p => p.id !== idToDelete);

        saveToStorage();
        renderPosts();
    }
    // EDIT //
    if (target.classList.contains('edit-btn')) {
        const idToEdit = target.dataset.id;
        const postToEdit = posts.find(p => p.id === idToEdit);

        console.log('Edit clicked. Post found:', postToEdit);

        if (!postToEdit) return;

        titleInput.value = postToEdit.title;
        contentInput.value = postToEdit.content;

        editingPostId = idToEdit;
        formHeading.textContent = 'Edit Post';
        submitBtn.textContent = 'Save Changes';
        cancelBtn.classList.remove('hidden');

        postForm.scrollIntoView({ behavior: 'smooth' });
    }
});

// CANCEL EDIT //
cancelBtn.addEventListener('click', function () {
    editingPostId = null;
    postForm.reset();
    titleError.textContent = '';
    contentError.textContent = '';
    formHeading.textContent = 'New Post';
    submitBtn.textContent = 'Publish Post';
    cancelBtn.classList.add('hidden');
});

// INITIALIZATION //
posts = loadFromStorage();

console.log('posts loaded from the localStorage on init', posts);

renderPosts();