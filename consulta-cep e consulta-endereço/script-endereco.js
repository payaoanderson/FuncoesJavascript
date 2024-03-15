document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('address-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const estado = document.getElementById('estado').value;
        const cidade = document.getElementById('cidade').value;
        const logradouro = document.getElementById('logradouro').value;

        const url = `https://viacep.com.br/ws/${estado}/${cidade}/${logradouro}/json/`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar endereço.');
                }
                return response.json();
            })
            .then(data => {
                preencherCampos(data);
            })
            .catch(error => {
                console.error(error);
                alert('Erro ao buscar endereço. Verifique se os dados estão corretos.');
            });
    });

        function preencherCampos(data) {
        document.getElementById('complemento').textContent = data.complemento || '504';
        document.getElementById('bairro').textContent = data.bairro || 'centro';
        document.getElementById('localidade').textContent = data.localidade || 'campos novos paulista';
        document.getElementById('uf').textContent = data.uf || 'sp';
        document.getElementById('ddd').textContent = data.ddd || '14';
    }
});
