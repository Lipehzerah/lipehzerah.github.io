
function searchProduct() {
  const query = document.getElementById('searchInput').value.trim();
  if (query === '') return;

  saveSearchHistory(query);
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `<p>Buscando por "${query}"...</p>`;

  fetch(`https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query + " site:amazon.com.br OR site:magazineluiza.com.br OR site:mercadolivre.com.br OR site:shopee.com.br")}&key=YOUR_API_KEY&cx=YOUR_CX_ID`)
    .then(response => response.json())
    .then(data => {
      resultsDiv.innerHTML = "";
      if (!data.items) {
        resultsDiv.innerHTML = "<p>Nenhum resultado encontrado.</p>";
        return;
      }
      data.items.forEach(item => {
        const priceMatch = item.snippet.match(/R\$\s?\d+[.,]?\d*/);
        const price = priceMatch ? priceMatch[0] : "Preço não encontrado";
        resultsDiv.innerHTML += `
          <div>
            <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
            <p>${price}</p>
            <p>${item.snippet}</p>
          </div>
          <hr>
        `;
      });
    })
    .catch(error => {
      resultsDiv.innerHTML = "<p>Erro ao buscar resultados.</p>";
      console.error(error);
    });
}

function handleKey(event) {
  if (event.key === "Enter") {
    searchProduct();
  }
}

function saveSearchHistory(query) {
  let history = JSON.parse(localStorage.getItem("searchHistory")) || [];
  if (!history.includes(query)) {
    history.unshift(query);
    localStorage.setItem("searchHistory", JSON.stringify(history.slice(0, 10)));
  }
}

function clearHistory() {
  localStorage.removeItem("searchHistory");
}
