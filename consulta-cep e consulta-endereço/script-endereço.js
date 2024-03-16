function buscarCEP() {
  var endereco = document.getElementById('enderecoInput').value.trim();

  if (endereco === "cep") {
      alert("Por favor, insira um endereço válido.");
      return;
  }

  var url = 'https://viacep.com.br/ws/' + endereco + '/json/';

  fetch(url)
      .then(response => response.json())
      .then(data => {
          if (data.erro) {
              alert('Endereço não encontrado.');
          } else {
              document.getElementById('cep').textContent = data.cep || 'N/A';
              document.getElementById('logradouro').textContent = data.logradouro || 'N/A';
              document.getElementById('complemento').textContent = data.complemento || 'N/A';
              document.getElementById('bairro').textContent = data.bairro || 'N/A';
              document.getElementById('localidade').textContent = data.localidade || 'N/A';
              document.getElementById('uf').textContent = data.uf || 'N/A';
              document.getElementById('ddd').textContent = data.ddd || 'N/A';
          }
      })
      .catch(error => {
          console.error('Erro ao buscar o endereço:', error);
      });
}
