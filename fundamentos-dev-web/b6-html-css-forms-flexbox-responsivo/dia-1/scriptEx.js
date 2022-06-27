//Ex3
const submitButton = document.querySelector('#submit');

function pD(event) {
  event.preventDefault();
}

// submitButton.addEventListener('click', pD);

//Bonus
//2
const nome = document.querySelector('#name');
const email = document.querySelector('#email');
const motivo = document.querySelector('#reason');

function verifyCharacters() {
  if (email.value < 10 || email.value > 50 || nome.value < 10 || nome.value > 40 || motivo.value > 500) {
    alert('Dados inválidos!');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
  }
}

submitButton.addEventListener('click', verifyCharacters);