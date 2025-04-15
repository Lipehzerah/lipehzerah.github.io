
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    const products = [
        { loja: "Amazon", preco: 2050, nota: 3.5, link: "https://www.amazon.com.br" },
        { loja: "Shopee", preco: 1999, nota: 4.0, link: "https://shopee.com.br" },
        { loja: "Americanas", preco: 2150, nota: 4.2, link: "https://www.americanas.com.br" },
        { loja: "Magalu", preco: 2020, nota: 4.6, link: "https://www.magazineluiza.com.br" },
        { loja: "Submarino", preco: 1989, nota: 3.9, link: "https://www.submarino.com.br" },
    ];

    function renderResults(term) {
        const resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = "";

        products.forEach(prod => {
            const div = document.createElement("div");
            div.className = "result-item";
            div.innerHTML = `
                <h2>${term} - Oferta ${prod.loja}</h2>
                <p>R$ ${prod.preco.toFixed(2).replace(".", ",")}</p>
                <p class="stars">${"★".repeat(Math.floor(prod.nota)) + "☆".repeat(5 - Math.floor(prod.nota))} (${prod.nota.toFixed(1)}/5)</p>
                <a href="${prod.link}" target="_blank">Ver produto</a>
            `;
            resultsDiv.appendChild(div);
        });
    }

    searchButton.addEventListener("click", () => {
        const term = searchInput.value.trim();
        if (term !== "") {
            renderResults(term);
        }
    });

    searchInput.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            searchButton.click();
        }
    });
});
