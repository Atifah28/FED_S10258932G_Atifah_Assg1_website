// Set the target sale end date
// Set the target date
const saleEndDate = new Date("December 15, 2024 23:59:59").getTime();

// Update every second
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = saleEndDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    } 
    else {
        clearInterval(countdownInterval);
        document.querySelector(".countdown-ad").innerHTML = `
            <h1>🎉 Sale Ended!</h1>
            <p>Stay tuned for our next sweet event! 🍪</p>
        `;
    }
}, 1000);


// Store cart items in an array
let cart = [];

// Function to add product to the cart
function addToCart(productName, productPrice) {
    // Ask the user for the quantity of the item
    let quantity = prompt(`How many of "${productName}" would you like to add?`, 1);

    // Ensure the quantity is a valid number
    quantity = parseInt(quantity);

    if (isNaN(quantity) || quantity <= 0) {
        alert("Please enter a valid quantity.");
        return;
    }

    // Check if the item already exists in the cart
    let existingItemIndex = cart.findIndex(item => item.name === productName);

    if (existingItemIndex !== -1) {
        // If the item exists, update the quantity
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Otherwise, add a new item to the cart
        cart.push({
            name: productName,
            price: productPrice,
            quantity: quantity
        });
    }

    // Update the cart display
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartTable = document.getElementById("cart-items");
    cartTable.innerHTML = ""; // Clear existing cart items

    let total = 0;

    cart.forEach((item, index) => {
        const row = document.createElement("tr");

        // Product name
        const nameCell = document.createElement("td");
        nameCell.textContent = item.name;

        // Price
        const priceCell = document.createElement("td");
        priceCell.textContent = `S$${item.price.toFixed(2)}`;

        // Quantity
        const quantityCell = document.createElement("td");
        quantityCell.textContent = item.quantity;

        // Subtotal
        const subtotalCell = document.createElement("td");
        subtotalCell.textContent = `S$${(item.price * item.quantity).toFixed(2)}`;
        total += item.price * item.quantity;

        // Remove button
        const removeCell = document.createElement("td");
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = () => removeFromCart(index);
        removeCell.appendChild(removeButton);

        // Append cells to the row
        row.appendChild(nameCell);
        row.appendChild(priceCell);
        row.appendChild(quantityCell);
        row.appendChild(subtotalCell);
        row.appendChild(removeCell);

        // Append row to the cart table
        cartTable.appendChild(row);
    });

    // Display the total amount
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `
        <td colspan="3" style="text-align: right;">Total:</td>
        <td>S$${total.toFixed(2)}</td>
        <td></td>
    `;
    cartTable.appendChild(totalRow);
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove the item from the cart array
    updateCart(); // Update the display
}

// Function to clear the cart
function clearCart() {
    cart = []; // Empty the cart array
    updateCart(); // Update the display
}

// Function to proceed to checkout (just a placeholder for now)
function checkout() {
    alert("Proceeding to checkout...");
}
