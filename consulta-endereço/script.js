document.getElementById('endereçoForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  var cep = document.getElementById('cep').value;
  var url = 'https://viacep.com.br/ws/' + cep + '/json/';

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      if (data.erro) {
        alert('CEP não encontrado. Por favor, digite um CEP válido.');
        return;
      }

      document.getElementById('endereço').value = data.logradouro;
      document.getElementById('complemento').textContent = data.complemento;
      document.getElementById('bairro').textContent = data.bairro;
      document.getElementById('localidade').textContent = data.localidade;
      document.getElementById('uf').textContent = data.uf;
    })
    .catch(function(error) {
      console.log('Ocorreu um erro:', error);
    });
});
