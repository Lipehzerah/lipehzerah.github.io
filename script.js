
function search() {
    const input = document.getElementById("searchInput").value.trim();
    if (input === "") return;

    const encoded = encodeURIComponent(input);
    const baseGoogle = "https://www.google.com/search?q=";
    const query = `${encoded}+site:magazineluiza.com.br+OR+site:amazon.com.br+OR+site:shopee.com.br+OR+site:mercadolivre.com.br`;
    const url = baseGoogle + query;

    window.open(url, "_blank");

    // Salva no histórico
    let history = JSON.parse(localStorage.getItem("searchHistory") || "[]");
    if (!history.includes(input)) {
        history.unshift(input);
        if (history.length > 10) history.pop();
        localStorage.setItem("searchHistory", JSON.stringify(history));
    }
    renderHistory();
}

function renderHistory() {
    const historyContainer = document.getElementById("history");
    const history = JSON.parse(localStorage.getItem("searchHistory") || "[]");
    historyContainer.innerHTML = "<h3>Histórico de buscas:</h3>" + history.map(item => `<div>${item}</div>`).join("");
}

function clearHistory() {
    localStorage.removeItem("searchHistory");
    renderHistory();
}

document.addEventListener("DOMContentLoaded", () => {
    renderHistory();
    document.getElementById("searchInput").addEventListener("keydown", (e) => {
        if (e.key === "Enter") search();
    });
});
