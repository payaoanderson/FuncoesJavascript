document.addEventListener("DOMContentLoaded", async function () {
  const conteudo = document.getElementById("conteudo");

  const resposta = await fetch(
    "https://servicodados.ibge.gov.br/api/v3/agregados/1705/variaveis?view=OLAP&localidades=BR"
  );

  const dados = await resposta.json();

  dados.forEach(function (inflacao) {
    const divBlocoInflacao = document.createElement("div");
    divBlocoInflacao.classList.add("bloco-inflacao");

    const ulSubtitulo = document.createElement("ul");
    ulSubtitulo.id = "subtitulo";

    const liSubtitulo = document.createElement("li");
    liSubtitulo.textContent = `${inflacao.medida} - (${inflacao.unidade})`;

    ulSubtitulo.appendChild(liSubtitulo);

    divBlocoInflacao.appendChild(ulSubtitulo);

    const resultados = inflacao.resultados;
    resultados.forEach(function (resultado) {
      const olResultado = document.createElement("ol");

      const series = resultado.series;

      series.forEach(function (seriegeral) {
        const serieData = seriegeral.serie;

        for (const anoMes in serieData) {
          const liSerie = document.createElement("li");
          liSerie.textContent = `${anoMes} - ${serieData[anoMes]}`;

          olResultado.appendChild(liSerie);
        }
      });

      ulSubtitulo.appendChild(olResultado);
    });

    conteudo.appendChild(divBlocoInflacao);
  });
});
