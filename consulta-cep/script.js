document.addEventListener("DOMContentLoaded", async function(){
    const container = document.getElementById(container);
    const resposta = await fetch(
        "https://viacep.com.br/ws/01001000/json/"
    )

    const dados = await resposta.json();

     dados.forEach(function(logradouro){
        const logradouro = document.createElement("logradouro");
        logradouro.id("logradouro");

        const Complemento = document.createElement("complemento");
        Complemento.id("complemento");

        const bairro = document.createElement("bairro");
        bairro.id("bairro");

        const local = document.createElement("local");
        local.id("local");

        const uf = document.createElement("uf");
        uf.id("uf");

        const ddd = document.createElement("ddd");
        ddd.id("ddd")

        const cep = document.createElement("cep");
        cep.id("cep");

        const botao = document.createElement("botao");
        botao.id("botao");

        botao.appendChild(cep);

    }       

    

    
)
}

)
