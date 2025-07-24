document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const usuario = document.getElementById('usuario').value;
  const senha = document.getElementById('senha').value;

  if (usuario.trim() === '' || senha.trim() === '') {
    alert('Preencha todos os campos!');
    return;
  }

  localStorage.setItem('usuario', usuario);

  window.location.href = 'pages/objetivo.html'; // próxima tela
});
