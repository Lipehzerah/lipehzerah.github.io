
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("searchInput");
    const button = document.getElementById("searchButton");
    const clearButton = document.getElementById("clearHistory");
    const results = document.getElementById("results");
    const historyBox = document.getElementById("historyBox");

    // Load history
    const history = JSON.parse(localStorage.getItem("history") || "[]");
    if (history.length) renderHistory(history);

    // Search function
    function search() {
        const query = input.value.trim();
        if (!query) return;

        const googleQuery = `${query} site:amazon.com.br OR site:magazineluiza.com.br OR site:mercadolivre.com.br preço`;
        const searchURL = "https://www.google.com/search?q=" + encodeURIComponent(googleQuery);

        // Save to history
        if (!history.includes(query)) {
            history.unshift(query);
            if (history.length > 10) history.pop();
            localStorage.setItem("history", JSON.stringify(history));
        }

        renderHistory(history);

        // Show results
        results.innerHTML = \`<p>Buscando por: <strong>\${query}</strong>...</p><iframe src="\${searchURL}" width="100%" height="600px"></iframe>\`;
    }

    // Event listeners
    button.addEventListener("click", search);
    input.addEventListener("keypress", function (e) {
        if (e.key === "Enter") search();
    });
    clearButton.addEventListener("click", function () {
        localStorage.removeItem("history");
        historyBox.innerHTML = "";
    });

    function renderHistory(items) {
        historyBox.innerHTML = "";
        items.forEach(item => {
            const btn = document.createElement("button");
            btn.textContent = item;
            btn.onclick = () => {
                input.value = item;
                search();
            };
            historyBox.appendChild(btn);
        });
    }
});
