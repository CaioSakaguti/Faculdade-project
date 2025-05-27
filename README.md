<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="author" content="Paulo Roberto de Oliveira Filho R0930C0 Caio Yuiti Sakaguti G932048">
    <meta name="description" content="APS - HTML 5, CSS3 e JS">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilos/estilos.css">
    <title>EcoLife</title>
</head>
<body>
  <header class="banner">
    <div class="banner-content">
      <h1>EcoLife</h1>
      <p>Práticas sustentáveis em suas vidas diárias.</p>
    </div>
  </header>
  <ul>
    <li><a href="index.html" class="active">Home</a></li>
    <li><a href="blog.html">Blog</a></li>
    <li><a href="recursos.html">Recursos</a></li>
    <li><a href="contato.html">Contato</a></li>
  </ul>
  <div class="index-title">
    <h1>Bem-vindos ao EcoLife</h1>
    <br>
    <h2>A vida mais sustentável e consciente</h2>
    <br>
    <h2>O que podemos mudar?</h2>
    <br>
    <p>Publicamos as dicas mais sustentáveis e acessíveis, fazendo o dia a dia se tornar mais equilibrado</p>
    <br>
  </div>
  <section id="course-content">
    <div class="modules-list">
      <div class="module">
        <a href="blog.html #horta"><span><b>Natureza:</b> Mesmo na cidade, podemos tornar nossos dias mais verdes</span></a>
      </div>
      <div class="module">
        <a href="blog.html #reciclagem"> <span><b>Reciclagem:</b> Dicas simples para o dia a dia</span></a>
      </div>
      <div class="module">
        <a href="blog.html #transporte"><span><b>Transporte <i>eco-friendly</i>:</b> Sugestões de tranportes sustentáveis</span></a>
      </div>
      <div class="module">
        <a href="blog.html #plastico"><span><b>Plástico:</b> Como reduzir o uso do plástico</span></a>
      </div>
      <div class="module">
        <a href="blog.html #energia"><span><b>Eneregia solar:</b> Saiba mais sobre energia solar residencial</span></a>
      </div>
    </div>
      </section>
  <footer>
    <img class="ecolife-logo" src="estilos/ecolifelogo.png" title="Ecolife Logotipo" alt="Ecolife Logotipo" height="80px" width="80px">
    <p><a href="contato.html">Acesse aqui nosso contato</a> e compartilhe sua experiência conosco.</p>
  </footer>
  
</body>
</html>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="author" content="Paulo Roberto de Oliveira Filho R0930C0 Caio Yuiti Sakaguti G932048">
    <meta name="description" content="APS - HTML 5, CSS3 e JS">
    <link rel="stylesheet" href="estilos/estilos.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EcoLife</title>
</head>
<body>
    <header class="banner">
        <div class="banner-content">
          <h1>EcoLife</h1>
          <p>Práticas sustentáveis em suas vidas diárias.</p>
        </div>
    </header>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="recursos.html">Recursos</a></li>
        <li><a href="contato.html" class="active">Contato</a></li>
    </ul>
    <div class="contato-title"><h1>Entre em contato conosco</h1></div>
    <div class="contato-content">
        <div class="form">
            <form action="#" method="post">
                <div class="title">Compartilhe sua experiência</div>
                <div class="input-group">    
                    <div class="input-box">
                        <label for="name">Nome: </label>
                        <input type="text" id="name" name="name" placeholder="Digite seu nome" required>
                    </div>
                    <div class="input-box">
                        <label for="email">E-mail: </label>
                        <input type="email" id="email" name="email" placeholder="Digite seu email" required>
                    </div>
                    <div class="input-box">
                        <label for="number">Celular: </label>
                        <input type="tel" id="number" name="number" placeholder="(XX)XXXXX-XXXX" pattern="[0-9]{2}[0-9]{5}[0-9]{4}" required>
                    </div>
                    <div class="input-box" id="textarea">
                        <label for="comment">Comentário: </label>
                        <textarea id="comment" name="name" placeholder="Conte-nos a sua experiência:" required></textarea>
                    </div>
                    <div class="input-button">
                        <input type="reset">
                        <input type="submit" value="Enviar">
                    </div>
            </form>
        </div>
    </div>
    <div class="container">
        <div id="registrationSection">
            <h2>Cadastro</h2>
            <form id="registrationForm">
                <input type="text" id="name" placeholder="Nome" required>
                <input type="email" id="email" placeholder="E-mail" required>
                <input type="tel" id="phone" placeholder="Celular" required>
                <button type="submit">Cadastrar</button>
            </form>
        </div>

        <div id="commentSection" style="display: none;">
            <h2>Deixe seu comentário</h2>
            <form id="commentForm">
                <textarea id="commentText" placeholder="Escreva seu comentário aqui..." required></textarea>
                <button type="submit">Enviar</button>
            </form>
            <div id="commentsContainer">
                <h3>Comentários:</h3>
                <ul id="commentsList"></ul>
            </div>
        </div>
    </div>

    <script src="scripts.js"></script>
</body>
</html>
