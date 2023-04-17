const loginButton = document.getElementById('loginButton');
const submit = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
loginButton.addEventListener('click', () => {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
checkbox.addEventListener('click', () => {
  if (checkbox.checked) {
    submit.removeAttribute('disabled');
  } else {
    submit.setAttribute('disabled', '');
  }
});
