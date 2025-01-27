// Make sure document is loaded
document.addEventListener("DOMContentLoaded", function () {
    const APIKEY = "6795d5242e4264129cd23983";
  
    // Create sign up listener
    document.getElementById("signup-button").addEventListener("click", function (e) {
      // Prevent default action of the button 
      e.preventDefault();
  
      // Retrieve form data
      let email = document.getElementById("email").value;
      let name = document.getElementById("name").value;
      let password = document.getElementById("password").value;
  
      // Get form values when the user clicks
      let jsondata = {
        "email": email,
        "name": name,
        "password": password
      };
  
      // Create AJAX settings
      let settings = {
        method: "POST", // Use post to send info
        headers: {
          "Content-Type": "application/json",
          "x-apikey": APIKEY,
          "Cache-Control": "no-cache"
        },
        body: JSON.stringify(jsondata),
        beforeSend: function () {
          // Clear form using the form ID and triggering its reset feature
          document.getElementById("user-form").reset();
        }
      }
  
      // Send AJAX request over to the DB
      fetch("https://fedassignment-ece6.restdb.io/rest/userlogin", settings)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          document.location.href = "index.html";
        });
    });
});