document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const orderSummary = document.getElementById("order-summary");
    const checkoutSubtotal = document.getElementById("checkout-subtotal");
    const checkoutTotal = document.getElementById("checkout-total");
    const placeOrderBtn = document.querySelector(".site-btn");
    const checkoutForm = document.querySelector(".checkout__form");

    function updateOrderSummary() {
        orderSummary.innerHTML = "";
        let totalPrice = 0;

        if (cart.length === 0) {
            orderSummary.innerHTML = "<li>Your cart is empty.</li>";
            checkoutSubtotal.textContent = "$0.00";
            checkoutTotal.textContent = "$0.00";
            placeOrderBtn.disabled = true; // Disable checkout if cart is empty
            return;
        }

        cart.forEach((item, index) => {
            let itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;

            let listItem = document.createElement("li");
            listItem.innerHTML = `${index + 1}. ${item.name} (x${item.quantity}) <span>$${itemTotal.toFixed(2)}</span>`;
            orderSummary.appendChild(listItem);
        });

        checkoutSubtotal.textContent = `$${totalPrice.toFixed(2)}`;
        checkoutTotal.textContent = `$${totalPrice.toFixed(2)}`;
        placeOrderBtn.disabled = false; // Enable checkout when items exist
    }

    function validateForm(event) {
        event.preventDefault(); // Stop form submission if validation fails
        let isValid = true;
        const requiredFields = checkoutForm.querySelectorAll("input[required]");

        requiredFields.forEach(field => {
            let errorMessage = field.parentNode.querySelector(".error-message");

            if (field.value.trim() === "") {
                isValid = false;
                field.style.border = "2px solid red";

                if (!errorMessage) {
                    let errorMsg = document.createElement("span");
                    errorMsg.textContent = "This field is required";
                    errorMsg.classList.add("error-message");
                    errorMsg.style.color = "red";
                    errorMsg.style.fontSize = "12px";
                    errorMsg.style.display = "block";
                    errorMsg.style.marginTop = "5px";
                    field.parentNode.appendChild(errorMsg);
                }
            } else {
                field.style.border = "";
                if (errorMessage) {
                    errorMessage.remove();
                }
            }
        });

        if (cart.length === 0) {
            alert("Your cart is empty! Please add items before proceeding.");
            return;
        }

        if (!isValid) {
            alert("Please fill in all required fields before placing your order.");
            return;
        }

        // If validation passes
        alert("Order placed successfully!");
        localStorage.removeItem("cart"); // Clear cart after successful order
        window.location.href = "order-confirmation.html"; // Redirect to confirmation page
    }

    placeOrderBtn.addEventListener("click", validateForm);
    updateOrderSummary();
});
