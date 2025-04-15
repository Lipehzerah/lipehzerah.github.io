document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");
  const button = document.getElementById("searchBtn");
  const resultsDiv = document.getElementById("results");

  const search = () => {
    const term = input.value.trim();
    if (!term) return;

    resultsDiv.innerHTML = '<p>Buscando resultados, aguarde...</p>';
    const query = \`\${term} site:amazon.com.br OR site:magazineluiza.com.br OR site:mercadolivre.com.br preço\`;

    window.open("https://www.google.com/search?q=" + encodeURIComponent(query), "_blank");

    const history = JSON.parse(localStorage.getItem("searchHistory") || "[]");
    if (!history.includes(term)) {
      history.push(term);
      localStorage.setItem("searchHistory", JSON.stringify(history));
    }
  };

  button.addEventListener("click", search);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") search();
  });
});