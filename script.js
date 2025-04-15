
function searchProduct() {
  const query = document.getElementById("searchBox").value;
  if (!query) return alert("Digite algo para buscar!");
  const cx = 'YOUR_CX'; // Substitua pelo seu CSE ID
  const key = 'YOUR_API_KEY'; // Substitua pela sua API KEY
  const url = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${query}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("results");
      container.innerHTML = "";
      data.items.forEach(item => {
        const div = document.createElement("div");
        div.innerHTML = `<strong>${item.title}</strong><br><a href="${item.link}" target="_blank">${item.link}</a><p>${item.snippet}</p><hr>`;
        container.appendChild(div);
      });
    })
    .catch(error => console.error("Erro ao buscar:", error));
}
