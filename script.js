
function searchProduct() {
    const query = document.getElementById("search-input").value;
    if (query) {
        const url = "https://www.google.com/search?q=" + encodeURIComponent(query);
        window.open(url, "_blank");
    }
}
