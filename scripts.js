document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const commentForm = document.getElementById('commentForm');
    const commentText = document.getElementById('commentText');
    const commentsList = document.getElementById('commentsList');
    const registrationSection = document.getElementById('registrationSection');
    const commentSection = document.getElementById('commentSection');

    // Check if user is already registered
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        registrationSection.style.display = 'none';
        commentSection.style.display = 'block';
        loadComments();
    }

    // Registration form submission
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();

        if (name && email && phone) {
            localStorage.setItem('user', JSON.stringify({ name, email, phone }));
            registrationSection.style.display = 'none';
            commentSection.style.display = 'block';
            loadComments();
        }
    });

    // Load comments from localStorage
    const loadComments = () => {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        commentsList.innerHTML = '';
        comments.forEach(comment => {
            const li = document.createElement('li');
            li.textContent = comment;
            commentsList.appendChild(li);
        });
    };

    // Save comments to localStorage
    const saveComments = (comments) => {
        localStorage.setItem('comments', JSON.stringify(comments));
    };

    // Add new comment
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const comment = commentText.value.trim();
        if (comment) {
            const comments = JSON.parse(localStorage.getItem('comments')) || [];
            comments.push(comment);
            saveComments(comments);
            commentText.value = '';
            loadComments();
        }
    });
});
