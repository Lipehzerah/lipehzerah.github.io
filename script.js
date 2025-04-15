
function search() {
    const input = document.getElementById("searchInput");
    const query = input.value.trim();
    if (!query) return;

    saveToHistory(query);
    const searchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}+site:amazon.com.br+OR+site:mercadolivre.com.br+OR+site:shopee.com.br+OR+site:magazineluiza.com.br+preço`;
    window.open(searchURL, "_blank");
}

document.getElementById("searchInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") search();
});

function saveToHistory(query) {
    let history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    if (!history.includes(query)) {
        history.unshift(query);
        if (history.length > 10) history.pop();
        localStorage.setItem("searchHistory", JSON.stringify(history));
    }
}

function showHistory() {
    const historyList = document.getElementById("historyList");
    const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    historyList.innerHTML = "";
    history.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        li.onclick = () => {
            document.getElementById("searchInput").value = item;
            search();
        };
        historyList.appendChild(li);
    });
    historyList.classList.remove("hidden");
}

function clearHistory() {
    localStorage.removeItem("searchHistory");
    document.getElementById("historyList").classList.add("hidden");
}
