document.addEventListener("DOMContentLoaded", function () {
  // Product array
  const products = [
    { id: "1", name: "Groceries" },
    { id: "2", name: "Beverages" },
    { id: "3", name: "Toiletries" }
  ];

  // Populate product dropdown
  const productSelect = document.getElementById("productName");
  if (productSelect) {
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  }

  // Star rating glow logic
  const ratingItems = document.querySelectorAll(".rating-item input[type='radio']");
  ratingItems.forEach((radio) => {
    radio.addEventListener("change", function () {
      const allItems = document.querySelectorAll(".rating-item");
      allItems.forEach((item, index) => {
        const label = item.querySelector("label");
        if (index < this.value - 1 || index === this.value - 1) {
          label.style.color = "#FFD700";
          label.style.textShadow = "0 0 5px rgba(255, 215, 0, 0.8)";
        } else {
          label.style.color = "#D3D3D3";
          label.style.textShadow = "none";
        }
      });
    });
  });

  // Review counter
  if (window.location.pathname.includes("review.html")) {
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem("reviewCount", reviewCount);
    const reviewCountElement = document.getElementById("review-count");
    if (reviewCountElement) {
      reviewCountElement.textContent = reviewCount;
    }
  }

  // 📅 Last modified date logic
  const lastModified = document.getElementById("lastModified");
  if (lastModified) {
    lastModified.textContent = "Last modified: " + document.lastModified;
  }
});