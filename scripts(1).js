/*const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const number = document.getElementById("number")

form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    checkInputs();
  });

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const numberValue = number.value;

    if (usernameValue === "") {
        setErrorFor(username, "O nome de usuário é obrigatório.");
      } else {
        setSuccessFor(username);
      }
    
      if (emailValue === "") {
        setErrorFor(email, "O email é obrigatório.");
      } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, insira um email válido.");
      } else {
        setSuccessFor(email);
      }

      if (numberValue === "") {
        setErrorFor(number, "O número de telefone é obrigatório.");
      } else {
        setSuccessFor(number);
      }

      const inputBoxes = form.querySelectorAll(".input-box");

      const formIsValid = [...inputBoxes].every((inputBox) => {
        return inputBox.className === "input-box success";
      });
    
      if (formIsValid) {
        console.log("O formulário está 100% válido!");
      }
}

function setErrorFor(input, message) {
    const inputBox = input.parentElement;
    const small = inputBox.querySelector("small");
  
    // Adiciona a mensagem de erro
    small.innerText = message;
  
    // Adiciona a classe de erro
    inputBox.className = "input-box error";
  }
  
  function setSuccessFor(input) {
    const inputBox = input.parentElement;
  
    // Adicionar a classe de sucesso
    inputBox.className = "input-box success";
  }

  function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }*/
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