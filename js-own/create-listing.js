// Make sure document is loaded
document.addEventListener("DOMContentLoaded", function () {
    const APIKEY = "6795d5242e4264129cd23983";
  
    // Create sign up listener
    document.getElementById("list-btn").addEventListener("click", function (e) {
      // Prevent default action of the button 
      e.preventDefault();
  
      // Retrieve form data
      let name = document.getElementById("name").value;
      let description = document.getElementById("description").value;
      let category = document.getElementById("category").value;
      let brand = document.getElementById("brand").value;
      let condition = document.getElementById("condition").value;
      let country = document.getElementById("country").value;
      let shipping = document.getElementById("shipping").value;
      let price = document.getElementById("price").value;
  
      // Get form values when the user clicks
      let jsondata = {
        "name": name,
        "description": description,
        "category": category,
        "brand": brand,
        "condition": condition,
        "country": country,
        "shipping": shipping,
        "price": price
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
          document.getElementById("create-listing-form").reset();
        }
      }
  
      // Send AJAX request over to the DB
      fetch("https://fedassignment-ece6.restdb.io/rest/listing", settings)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          document.location.href = "seller-profile.html";
        });
    });
});