function searchProduct() {
  const input = document.getElementById('searchInput').value.trim();
  const store = document.getElementById('storeFilter').value;
  let query = input;

  if (store !== '') {
    query += ` site:${store}`;
  }

  if (input !== '') {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  }
}

function submitReview() {
  const stars = document.getElementById('stars').value;
  const comment = document.getElementById('reviewText').value.trim();
  const reviewDisplay = document.getElementById('reviewDisplay');

  if (comment !== '') {
    const review = document.createElement('div');
    review.innerHTML = `<strong>${'⭐'.repeat(stars)}</strong> - ${comment}`;
    reviewDisplay.appendChild(review);

    document.getElementById('stars').value = "5";
    document.getElementById('reviewText').value = "";
  } else {
    alert("Por favor, escreva um comentário.");
  }
}
