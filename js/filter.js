document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".product__item"); // Select all products
    const categoryLinks = document.querySelectorAll(".shop__sidebar__categories ul li a");
    const priceLinks = document.querySelectorAll(".shop__sidebar__price ul li a");

    let selectedCategory = null;
    let selectedPrice = { min: 0, max: Infinity };

    // Function to update product display
    function updateProductDisplay() {
        products.forEach(product => {
            let showProduct = true;

            // Get product details
            const productCategory = product.getAttribute("data-category") || "";
            const productPrice = parseFloat(product.querySelector("h5").textContent.replace("$", ""));

            // Check category filter
            if (selectedCategory && selectedCategory !== productCategory) {
                showProduct = false;
            }

            // Check price filter
            if (productPrice < selectedPrice.min || productPrice > selectedPrice.max) {
                showProduct = false;
            }

            // Show or hide the product
            product.style.display = showProduct ? "block" : "none";
        });
    }

    // Category Filter
    categoryLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            selectedCategory = this.getAttribute("data-category"); // Get category from `data-category`
            updateProductDisplay();
        });
    });

    // Price Filter
    priceLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const priceRange = this.getAttribute("data-price").split("-");
            selectedPrice = {
                min: parseInt(priceRange[0]),
                max: priceRange[1] ? parseInt(priceRange[1]) : Infinity
            };
            updateProductDisplay();
        });
    });
});
