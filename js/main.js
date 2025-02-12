/*  ---------------------------------------------------
    Template Name: Male Fashion
    Description: Male Fashion - ecommerce teplate
    Author: Colorib
    Author URI: https://www.colorib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Gallery filter
        --------------------*/
        $('.filter__controls li').on('click', function () {
            $('.filter__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.product__filter').length > 0) {
            var containerEl = document.querySelector('.product__filter');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Search Switch
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Accordin Active
    --------------------*/
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active');
    });

    //Canvas Menu
    $(".canvas__open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("active");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("active");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    /*-----------------------
        Hero Slider
    ------------------------*/
    $(".hero__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<span class='arrow_left'><span/>", "<span class='arrow_right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false
    });

    /*--------------------------
        Select
    ----------------------------*/
    $("select").niceSelect();

    /*-------------------
		Radio Btn
	--------------------- */
    $(".product__color__select label, .shop__sidebar__size label, .product__details__option__size label").on('click', function () {
        $(".product__color__select label, .shop__sidebar__size label, .product__details__option__size label").removeClass('active');
        $(this).addClass('active');
    });

    /*-------------------
		Scroll
	--------------------- */
    $(".nice-scroll").niceScroll({
        cursorcolor: "#0d0d0d",
        cursorwidth: "5px",
        background: "#e5e5e5",
        cursorborder: "",
        autohidemode: true,
        horizrailenabled: false
    });

    /*------------------
        CountDown
    --------------------*/
    // For demo preview start
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    if(mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;
    // For demo preview end


    // Uncomment below and use your date //

    /* var timerdate = "2020/12/30" */

    $("#countdown").countdown(timerdate, function (event) {
        $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Days</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Hours</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Minutes</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Seconds</p> </div>"));
    });

    /*------------------
		Magnific
	--------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*-------------------
		Quantity change
	--------------------- */
    var proQty = $('.pro-qty');
    proQty.prepend('<span class="fa fa-angle-up dec qtybtn"></span>');
    proQty.append('<span class="fa fa-angle-down inc qtybtn"></span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    var proQty = $('.pro-qty-2');
    proQty.prepend('<span class="fa fa-angle-left dec qtybtn"></span>');
    proQty.append('<span class="fa fa-angle-right inc qtybtn"></span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    /*------------------
        Achieve Counter
    --------------------*/
    $('.cn_num').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})(jQuery);


// Create Listing
document.addEventListener("DOMContentLoaded", function () {
    // Handle dropdown functionality
    document.querySelectorAll(".custom-dropdown").forEach(function (dropdown) {
        let dropdownBtn = dropdown.querySelector(".dropdown-btn");
        let dropdownMenu = dropdown.querySelector(".dropdown-menu");

        dropdownBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            dropdownMenu.classList.toggle("show");
        });

        dropdownMenu.querySelectorAll("li").forEach(function (item) {
            item.addEventListener("click", function (event) {
                event.stopPropagation();
                dropdownBtn.innerText = this.innerText;
                dropdownMenu.classList.remove("show");
                dropdownBtn.setAttribute("data-selected", this.innerText);
            });
        });

        document.addEventListener("click", function () {
            dropdownMenu.classList.remove("show");
        });
    });

    // Handle photo upload
    document.getElementById("photoUpload").addEventListener("change", function(event) {
        const previewContainer = document.getElementById("imagePreview");
        previewContainer.innerHTML = ""; // Clear previous previews
        const files = event.target.files;

        if (files.length > 8) {
            alert("You can only upload up to 8 images.");
            return;
        }

        for (let file of files) {
            if (!file.type.startsWith("image/")) {
                alert("Only JPEG or PNG images are allowed.");
                continue;
            }

            const reader = new FileReader();
            reader.onload = function(e) {
                const imgContainer = document.createElement("div");
                imgContainer.style.position = "relative";

                const img = document.createElement("img");
                img.src = e.target.result;
                img.style.width = "100px";
                img.style.height = "100px";
                img.style.objectFit = "cover";
                img.style.borderRadius = "5px";

                const removeBtn = document.createElement("button");
                removeBtn.innerHTML = "X";
                removeBtn.style.position = "absolute";
                removeBtn.style.top = "5px";
                removeBtn.style.right = "5px";
                removeBtn.style.background = "red";
                removeBtn.style.color = "white";
                removeBtn.style.border = "none";
                removeBtn.style.cursor = "pointer";
                removeBtn.style.padding = "3px 5px";
                removeBtn.style.borderRadius = "50%";

                removeBtn.addEventListener("click", function() {
                    imgContainer.remove();
                });

                imgContainer.appendChild(img);
                imgContainer.appendChild(removeBtn);
                previewContainer.appendChild(imgContainer);
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle form validation and Lottie animation
    const form = document.querySelector("form");
    const successModal = document.getElementById("success-modal");
    const lottieContainer = document.getElementById("lottie-animation");

    const requiredFields = [
        { id: "photoUpload", message: "Please upload at least one photo." },
        { id: "description", message: "Please enter a description." },
        { id: "category-btn", message: "Please select a category." },
        { id: "condition", message: "Please select a condition." },
        { id: "country", message: "Please enter your country." },
        { id: "shipping-price", message: "Please enter a shipping price." },
        { id: "item-price", message: "Please enter an item price." }
    ];

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default submission
        let isValid = true;

        requiredFields.forEach(field => {
            let element = document.getElementById(field.id);
            if (!element) return;

            let value;
            if (field.id === "photoUpload") {
                value = element.files.length; // Check if at least one image is uploaded
            } else if (field.id === "category-btn") {
                value = element.getAttribute("data-selected"); // Get the selected category
            } else {
                value = element.value.trim();
            }

            if (!value) {
                showError(element, field.message);
                isValid = false;
            } else {
                clearError(element);
            }
        });

        if (isValid) {
            // Show success modal
            successModal.style.display = "flex";

            // Load Lottie animation
            const lottiePlayer = document.createElement("dotlottie-player");
            lottiePlayer.src = "https://lottie.host/b20ff686-d90a-428f-ba0c-3b3ad9638eb0/NsfaIo3FbV.lottie";
            lottiePlayer.background = "transparent";
            lottiePlayer.speed = "1";
            lottiePlayer.style.width = "200px";
            lottiePlayer.style.height = "200px";
            lottiePlayer.loop = false;
            lottiePlayer.autoplay = true;

            // Remove existing animation if any
            lottieContainer.innerHTML = "";
            lottieContainer.appendChild(lottiePlayer);

            // Redirect after 3 seconds
            setTimeout(() => {
                window.location.href = "bump.html"; 
            }, 1500);
        }
    });

    function showError(element, message) {
        clearError(element);

        let error = document.createElement("div");
        error.className = "error-message";
        error.textContent = message;
        error.style.color = "red";
        error.style.fontSize = "12px";
        error.style.marginTop = "5px";

        element.parentNode.appendChild(error);
        element.style.border = "2px solid red";
    }

    function clearError(element) {
        let error = element.parentNode.querySelector(".error-message");
        if (error) error.remove();
        element.style.border = "1px solid #ccc"; // Reset border color
    }
});


// Chat 
document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.querySelector(".write_msg");
    const sendButton = document.querySelector(".msg_send_btn");
    const messageHistory = document.querySelector(".msg_history");

    // Ensure elements exist before proceeding
    if (!messageInput || !sendButton || !messageHistory) {
        console.error("Chat elements not found! Check class names.");
        return;
    }

    // Function to add a user message
    function addUserMessage() {
        const text = messageInput.value.trim();
        if (text === "") return; // Prevent empty messages

        const messageDiv = document.createElement("div");
        messageDiv.classList.add("outgoing_msg");
        messageDiv.innerHTML = `
            <div class="sent_msg">
                <p>${text}</p>
                <span class="time_date">${getCurrentTime()}</span>
            </div>
        `;
        
        messageHistory.appendChild(messageDiv);
        messageInput.value = "";
        messageHistory.scrollTop = messageHistory.scrollHeight; // Auto-scroll to latest message

        // Auto-reply after 1 second
        setTimeout(addBotReply, 1000);
    }

    // Function to add an automatic bot reply
    function addBotReply() {
        const botReplies = [
            "Hello! How can I assist you?",
            "Our watches are 100% authentic!",
            "Check out our latest deals on the homepage!",
            "Yes, we ship worldwide!",
            "What specific brand are you looking for?"
        ];
        const randomReply = botReplies[Math.floor(Math.random() * botReplies.length)];

        const messageDiv = document.createElement("div");
        messageDiv.classList.add("incoming_msg");
        messageDiv.innerHTML = `
            <div class="incoming_msg_img">
                <img src="https://ptetutorials.com/images/user-profile.png" alt="User">
            </div>
            <div class="received_msg">
                <div class="received_withd_msg">
                    <p>${randomReply}</p>
                    <span class="time_date">${getCurrentTime()}</span>
                </div>
            </div>
        `;
        
        messageHistory.appendChild(messageDiv);
        messageHistory.scrollTop = messageHistory.scrollHeight;
    }

    // Function to get the current time
    function getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });
    }

    // Event listener for the send button
    sendButton.addEventListener("click", function () {
        addUserMessage();
    });

    // Event listener for pressing "Enter"
    messageInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            addUserMessage();
        }
    });
});

// Lottie Animation 
document.addEventListener("DOMContentLoaded", function () {
    // Load Lottie Animation
    let animationContainer = document.getElementById("lottie-animation");

    let animation = lottie.loadAnimation({
        container: animationContainer,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "https://lottie.host/2506e5a7-218e-42a1-a0bf-25766b646b37/e92sBsbOWS.json" // Lottie animation URL
    });

    // Hide preloader after page loads
    window.onload = function () {
        setTimeout(function () {
            document.getElementById("preloader").style.display = "none";
        }, 2000); // Adjust time if needed
    };
});

// Add to Cart 
document.addEventListener("DOMContentLoaded", function () {
    const cartCountElement = document.querySelector(".header__nav__option a[href='shopping-cart.html'] span");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Update cart count
    function updateCartCount() {
        cartCountElement.textContent = cart.length;
    }
    updateCartCount();

    // Add to Cart Functionality
    document.querySelectorAll(".add-cart").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior

            let productElement = this.closest(".product__item");
            let productName = productElement.querySelector("h6").textContent;
            let productPrice = productElement.querySelector("h5").textContent.replace("$", "");
            let productImage = productElement.querySelector(".product__item__pic").getAttribute("data-setbg");

            let product = {
                name: productName,
                price: parseFloat(productPrice),
                image: productImage,
                quantity: 1
            };

            // Check if product is already in cart, increase quantity if so
            let existingProduct = cart.find(item => item.name === product.name);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cart.push(product);
            }

            // Save to localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            // Update cart count
            updateCartCount();

            alert(`Added "${product.name}" to cart!`);
        });
    });
});
