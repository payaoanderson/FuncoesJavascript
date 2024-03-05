document.addEventListener("DOMContentLoaded", async function(){  
    const container = document.getElementById("container");

    const resposta = await fetch('https://servicodados.ibge.gov.br/api/v3/agregados/1705/variaveis?view=OLAP&localidades=BR');

    const dados = await resposta.json();    

    dados.forEach( function(cnae) {       

    });
}
)  
  