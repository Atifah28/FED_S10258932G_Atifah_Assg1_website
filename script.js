// Handle the "Submit Again" button click
function submitAgain() {
    // Show the feedback form again and hide the thank-you message
    document.getElementById("thankYouMessage").style.display = "none"; // Hide "Thank You" message
    document.getElementById("feedbackFormContainer").style.display = "block"; // Show the feedback form again
    document.getElementById("feedbackForm").reset(); // Reset the form data
    
    // Hide the feedback header if you want it removed after submission
    document.getElementsByClassName("feedback-header")[0].style.display = "none"; // Hide the header
}

// Submit event handler for the feedback form
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission behavior (no reload)
    
    // Hide the form and show the "Thank You" message
    document.getElementById("feedbackForm").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";

    // Optionally hide the feedback header after form submission
    document.getElementsByClassName("feedback-header")[0].style.display = "none"; // Hide the header
});

// Submit event handler for the feedback form
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior (no reload)

    // Get the form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value; // Optional field
    const order = document.getElementById("order").value;
    const rating = document.getElementById("rating").value;
    const feedback = document.getElementById("feedback").value;
    const product = document.getElementById("product").value; // Optional field

    // Create an object to store the form data
    const feedbackData = {
        name,
        email,
        order,
        rating,
        feedback,
        product
    };
    let allFeedback = JSON.parse(localStorage.getItem("feedbackData")) || [];
    allFeedback.push(feedbackData);
    // Store the object in localStorage (convert to JSON string)
    localStorage.setItem("feedbackData", JSON.stringify(allFeedback));


    // Hide the form and show the "Thank You" message
    document.getElementById("feedbackFormContainer").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";
});

// Function to reset the form or to show the Thank You page without displaying data
function resetForm() {
    document.getElementById("feedbackForm").reset(); // Reset form data
    document.getElementById("feedbackFormContainer").style.display = "block"; // Show form again
    document.getElementById("thankYouMessage").style.display = "none"; // Hide thank you message
}
//cart
// Retrieve existing cart from localStorage or initialize an empty cart if not found
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add an item to the cart
function addToCart(productName, productPrice) {
    // Add the product to the cart
    cart.push({ name: productName, price: productPrice });

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Notify the user
    alert(`${productName} has been added to your cart!`);
}

// Retrieve the cart from localStorage (Already declared at the top)
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
let total = 0;

// Display cart items
cart.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - S$${item.price.toFixed(2)}`;
    cartItemsList.appendChild(listItem);
    total += item.price;
});

// Update total price
cartTotal.textContent = `Total: S$${total.toFixed(2)}`;

// Clear cart function
function clearCart() {
    localStorage.removeItem('cart'); // Remove cart from localStorage
    alert("Cart cleared!");
    location.reload(); // Reload the page to update the cart display
}

// count down
