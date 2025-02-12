const API_URL = "https://fedassginment2-4e0f.restdb.io/rest/shop";
const API_KEY = "67ac1b1d8a79bbe6a8fdd9d3";

document.addEventListener("DOMContentLoaded", fetchListings);

async function fetchListings() {
    try {
        let response = await fetch(API_URL, {
            headers: {
                "Content-Type": "application/json",
                "x-apikey": API_KEY
            }
        });

        let listings = await response.json();
        let listingContainer = document.getElementById("listing-container");
        listingContainer.innerHTML = "";

        listings.forEach(item => {
            let listingHTML = `
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="product__item">
                        <div class="product__item__pic">
                            <a href="shop-details.html?id=${item._id}">
                                <img src="${item.image}" alt="${item.name}" width="200">
                            </a>
                        </div>
                        <div class="product__item__text">
                            <h6>${item.name}</h6>
                            <p>$${item.price}</p>
                            <a href="shop-details.html?id=${item._id}" class="view-details">View Details</a>
                        </div>
                    </div>
                </div>`;
            listingContainer.innerHTML += shopHTML;
        });
    } catch (error) {
        console.error("Error fetching listings:", error);
    }
}
