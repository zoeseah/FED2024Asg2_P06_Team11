// Make sure document is loaded
document.addEventListener("DOMContentLoaded", function () {
    const APIKEY = "6795d5242e4264129cd23983";
    
    // Create login listener
    document.getElementById("login-button").addEventListener("click", function (e) {
        // Prevent default action of the button 
        e.preventDefault();
    
        // Retrieve form data
        let emailUsername = document.getElementById("emailUsername").value;
        let password = document.getElementById("password").value;
    
        // Create AJAX settings
        let settings = {
          method: "GET", // Use get to retrieve info
          headers: {
            "Content-Type": "application/json",
            "x-apikey": APIKEY,
            "Cache-Control": "no-cache"
          },
          beforeSend: function () {
            // Clear form using the form ID and triggering its reset feature
            document.getElementById("user-form").reset();
          }
        }
    
        // Send AJAX request over to the DB
        fetch("https://fedassignment-ece6.restdb.io/rest/userlogin", settings)
          .then(response => response.json())
          .then(response => {
            console.log(response);
            let found = false;
            // Loop through the response to find the user
            for (var i = 0; i < response.length; i++) {
                if ((response[i].email == emailUsername || response[i].name == emailUsername) && response[i].password == password) {
                    found = true;
                    break;
                }
              }
            if (!found) {
              alert("Invalid email or password. Please try again.");
            }
            else
            {
                alert("Login successful!");
            }
          });
      });
});