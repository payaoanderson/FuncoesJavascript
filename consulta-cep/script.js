document.getElementById('cepForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  const cep = document.getElementById('cep').value;

  
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!response.ok) {
      throw new Error('Erro ao buscar endereço.');
    }
    const data = await response.json();
    preencherCampos(data);
  } catch(error) {
    console.error(error);
    alert('Erro ao buscar endereço. Verifique se o CEP está correto.');
  }
});

function preencherCampos(data) {
  document.getElementById('cepResultado').textContent = data.cep;
  document.getElementById('logradouro').textContent = data.logradouro;
  document.getElementById('complemento').textContent = data.complemento;
  document.getElementById('bairro').textContent = data.bairro;
  document.getElementById('localidade').textContent = data.localidade;
  document.getElementById('uf').textContent = data.uf;
}
