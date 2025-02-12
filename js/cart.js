document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartSubtotal = document.getElementById("cart-subtotal");
    const cartTotal = document.getElementById("cart-total");
    const emptyCartMessage = document.getElementById("empty-cart-message");
    const updateCartBtn = document.getElementById("update-cart-btn");
    const continueShoppingBtn = document.getElementById("continue-shopping-btn");

    function updateCartDisplay() {
        cartItemsContainer.innerHTML = "";
        let totalPrice = 0;

        if (cart.length === 0) {
            emptyCartMessage.style.display = "block";
        } else {
            emptyCartMessage.style.display = "none";
        }

        cart.forEach((item, index) => {
            let itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;

            let row = document.createElement("tr");
            row.innerHTML = `
                <td class="product__cart__item">
                    <div class="product__cart__item__pic">
                        <img src="${item.image}" width="50">
                    </div>
                    <div class="product__cart__item__text">
                        <h6>${item.name}</h6>
                        <h5>$${item.price.toFixed(2)}</h5>
                    </div>
                </td>
                <td>
                    <button class="decrease" data-index="${index}">-</button>
                    <span class="item-quantity">${item.quantity}</span>
                    <button class="increase" data-index="${index}">+</button>
                </td>
                <td class="cart-item-total">$${itemTotal.toFixed(2)}</td>
                <td><button class="remove" data-index="${index}">X</button></td>
            `;

            cartItemsContainer.appendChild(row);
        });

        cartSubtotal.textContent = `$${totalPrice.toFixed(2)}`;
        cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
        cartCount.textContent = cart.length;
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    // Handle quantity changes and remove items
    cartItemsContainer.addEventListener("click", function (event) {
        let index = event.target.getAttribute("data-index");

        if (!index) return; // Prevent errors if index is null

        index = parseInt(index);

        if (event.target.classList.contains("remove")) {
            cart.splice(index, 1);
        } else if (event.target.classList.contains("increase")) {
            cart[index].quantity++;
        } else if (event.target.classList.contains("decrease")) {
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
            }
        }

        updateCartDisplay();
    });

    // **Continue Shopping Button**
    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener("click", function () {
            window.location.href = "shop.html";
        });
    }

    // **Update Cart Button**
    if (updateCartBtn) {
        updateCartBtn.addEventListener("click", function () {
            updateCartDisplay();
            alert("Cart updated successfully!");
        });
    }

    updateCartDisplay();
});


// Proceed to checkout 
function proceedToCheckout() {
    // Ensure there are items in the cart before proceeding
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Your cart is empty. Add items before proceeding to checkout.");
        return;
    }

    // Redirect to the checkout page
    window.location.href = "checkout.html";
}
