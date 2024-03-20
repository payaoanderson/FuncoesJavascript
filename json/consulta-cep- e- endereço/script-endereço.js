
async function consultarCeps() {
  var uf = document.getElementById('Estado').value.toUpperCase();
  var cidade = document.getElementById('Cidade').value;
  var logradouro = document.getElementById('Logradouro').value;

  var url = `https://viacep.com.br/ws/${uf}/${cidade}/${logradouro.toLowerCase()}/json/`;

  try {
      const resposta = await fetch(url);
      const dados = await resposta.json();

      if (dados.length === 0) {
          document.getElementById('resultado').innerHTML = 'Nenhum CEP encontrado para essa referência.';
      } else {
          var resultadoHTML = '';
          dados.forEach(function(cep) {
              resultadoHTML += `<p><strong>Logradouro:</strong> ${cep.logradouro}</p>`;
              resultadoHTML += `<p><strong>Bairro:</strong> ${cep.bairro}</p>`;
              resultadoHTML += `<p><strong>Complemento:</strong> ${cep.complemento}</p>`;
              resultadoHTML += `<p><strong>Cidade:</strong> ${cep.localidade}</p>`;
              resultadoHTML += `<p><strong>Estado:</strong> ${cep.uf}</p>`;
              resultadoHTML += `<p><strong>DDD:</strong> ${cep.ddd}</p>`;
              resultadoHTML += '<hr>';
          });
          document.getElementById('resultado').innerHTML = resultadoHTML;
      }
  } catch (error) {
      console.error('Erro ao consultar os CEPs:', error);
      document.getElementById('resultado').innerHTML = 'Erro ao consultar os CEPs. Por favor, tente novamente mais tarde.';
  }
}
