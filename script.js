
function searchProduct() {
    const input = document.getElementById('search-input').value.trim();
    const resultsBox = document.getElementById('results');
    resultsBox.innerHTML = "";

    if (!input) {
        resultsBox.innerHTML = "<p>Por favor, digite um produto.</p>";
        return;
    }

    // Simulated product result
    resultsBox.innerHTML = `
        <div class="product">
            <h3>${input} - Oferta Shopee</h3>
            <p>R$ 1.999,00</p>
            <div>⭐⭐⭐⭐☆ (4/5)</div>
            <a href="https://www.google.com/search?q=${encodeURIComponent(input)}" target="_blank">Ver produto</a>
        </div>
        <div class="product">
            <h3>${input} - Oferta Amazon</h3>
            <p>R$ 2.050,00</p>
            <div>⭐⭐⭐☆☆ (3/5)</div>
            <a href="https://www.google.com/search?q=${encodeURIComponent(input)}" target="_blank">Ver produto</a>
        </div>
    `;
}
