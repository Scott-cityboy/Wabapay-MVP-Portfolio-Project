// Function to handle user authentication via OAuth
function authenticateUser() {
    // Placeholder code for user authentication
    console.log("User authenticated successfully!");
}

// Function to request type of water bottle in liters
function requestBottleSize() {
    // Placeholder code for requesting bottle size
    const bottleSize = prompt("Please enter the size of water bottle you want (in liters):");
    console.log("User selected bottle size:", bottleSize, "liters");
}

// Function to specify delivery location
function specifyDeliveryLocation() {
    // Placeholder code for specifying delivery location
    const deliveryLocation = prompt("Please enter your delivery location:");
    console.log("User specified delivery location:", deliveryLocation);
}

// Function to manage payment procedure
function processPayment() {
    // Placeholder code for processing payment
    const totalPrice = 5; // Assuming the price of the water per liter is ksh 5
    console.log("Total price:", totalPrice);
    alert("Payment successful! Your order has been placed.");
}

// Event listener for user authentication
document.getElementById('login-button').addEventListener('click', function() {
    authenticateUser();
});

// Event listener for requesting bottle size
document.getElementById('bottle-size-button').addEventListener('click', function() {
    requestBottleSize();
});

// Event listener for specifying delivery location
document.getElementById('delivery-location-button').addEventListener('click', function() {
    specifyDeliveryLocation();
});

// Event listener for processing payment
document.getElementById('payment-button').addEventListener('click', function() {
    processPayment();
});

