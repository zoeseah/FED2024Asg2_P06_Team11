document.addEventListener("DOMContentLoaded", () => {
    let animation = document.getElementById("animation");
    animation.style.display = "none";

    document.getElementById("checkout-btn").addEventListener("click", function (e) {
        e.preventDefault();
        
        animation.style.display = "block";
        animation.play();

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1700);
    });
});
