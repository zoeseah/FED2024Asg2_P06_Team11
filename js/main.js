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
document.getElementById("addPhotoButton").addEventListener("click", function() {
    document.getElementById("photoUpload").click();
});

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

            // Remove button
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

// Create Listings 
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".custom-dropdown").forEach(dropdown => {
        const dropdownBtn = dropdown.querySelector(".dropdown-btn");
        const dropdownMenu = dropdown.querySelector(".dropdown-menu");

        // Toggle dropdown when button is clicked
        dropdownBtn.addEventListener("click", function () {
            dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
        });

        // Select an item from the dropdown
        dropdown.querySelectorAll(".dropdown-submenu li").forEach(item => {
            item.addEventListener("click", function () {
                dropdownBtn.textContent = this.textContent;
                dropdownMenu.style.display = "none";
            });
        });

        // Hide dropdown when clicking outside
        document.addEventListener("click", function (e) {
            if (!dropdown.contains(e.target)) {
                dropdownMenu.style.display = "none";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    function formatCurrency(input) {
        let value = input.value.replace(/\D/g, ""); // Remove all non-numeric characters
        if (value === "") {
            input.value = "";
            return;
        }
        
        // Convert to currency format (e.g., $1,234.56)
        let formattedValue = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2
        }).format(value / 100); // Convert cents to dollars

        input.value = formattedValue;
    }

    // Apply formatting to both inputs
    document.querySelectorAll(".money-input").forEach(input => {
        input.addEventListener("input", function () {
            formatCurrency(this);
        });

        // Ensure formatting on page load if there is a pre-filled value
        input.addEventListener("blur", function () {
            formatCurrency(this);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting
        let isValid = true;

        // Required fields (excluding Brand)
        let requiredFields = [
            { id: "photoUpload", message: "Please upload at least one photo." },
            { id: "description", message: "Please enter a description." },
            { id: "category", message: "Please select a category." },
            { id: "condition", message: "Please select a condition." },
            { id: "country", message: "Please enter your country." },
            { id: "shipping-price", message: "Please enter a shipping price." },
            { id: "item-price", message: "Please enter an item price." }
        ];

        // Check each required field
        requiredFields.forEach(field => {
            let element = document.getElementById(field.id);
            let value = element ? element.value.trim() : "";

            // Check for empty values
            if (!value) {
                showError(element, field.message);
                isValid = false;
            } else {
                clearError(element);
            }
        });

        if (isValid) {
            alert("Form submitted successfully!"); // Replace with actual form submission logic
            this.submit();
        }
    });

    function showError(element, message) {
        clearError(element);
        let error = document.createElement("div");
        error.className = "error-message";
        error.textContent = message;
        element.parentNode.appendChild(error);
        element.style.borderColor = "red";
    }

    function clearError(element) {
        if (element) {
            let error = element.parentNode.querySelector(".error-message");
            if (error) error.remove();
            element.style.borderColor = ""; // Reset border color
        }
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
