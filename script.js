
function buscar() {
  const termo = document.getElementById("searchInput").value.trim();
  const resultados = document.getElementById("resultados");
  resultados.innerHTML = "";

  if (!termo) {
    alert("Digite o nome de um produto.");
    return;
  }

  const lojas = [
    {
      nome: "Amazon",
      preco: "R$ 2050,00",
      estrelas: 3.5,
      url: `https://www.amazon.com.br/s?k=${encodeURIComponent(termo)}`
    },
    {
      nome: "Shopee",
      preco: "R$ 1999,00",
      estrelas: 4.0,
      url: `https://shopee.com.br/search?keyword=${encodeURIComponent(termo)}`
    },
    {
      nome: "Magalu",
      preco: "R$ 2150,00",
      estrelas: 4.2,
      url: `https://www.magazineluiza.com.br/busca/${encodeURIComponent(termo)}`
    },
    {
      nome: "Americanas",
      preco: "R$ 2099,00",
      estrelas: 3.8,
      url: `https://www.americanas.com.br/busca/${encodeURIComponent(termo)}`
    },
    {
      nome: "Mercado Livre",
      preco: "R$ 2020,00",
      estrelas: 4.3,
      url: `https://lista.mercadolivre.com.br/${encodeURIComponent(termo)}`
    }
  ];

  lojas.forEach((loja) => {
    const div = document.createElement("div");
    div.className = "resultado";
    div.innerHTML = \`
      <h3>${termo} - Oferta ${loja.nome}</h3>
      <p>${loja.preco}</p>
      <p>${renderEstrelas(loja.estrelas)} (${loja.estrelas}/5)</p>
      <a href="${loja.url}" target="_blank">Ver produto</a>
    \`;
    resultados.appendChild(div);
  });
}

function renderEstrelas(nota) {
  const estrelasCheias = Math.floor(nota);
  const meiaEstrela = nota % 1 >= 0.5;
  let estrelas = "★".repeat(estrelasCheias);
  if (meiaEstrela) estrelas += "½";
  estrelas += "☆".repeat(5 - estrelasCheias - (meiaEstrela ? 1 : 0));
  return estrelas;
}
