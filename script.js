document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieve form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const order = document.getElementById('order').value.trim();
    const rating = document.getElementById('rating').value;
    const feedback = document.getElementById('feedback').value.trim();
    const product = document.getElementById('product').value.trim();

    // Validate required fields
    if (!name || !rating || !feedback) {
        alert('Please fill out the required fields');
        return;
    }

    // Create feedback data object
    const feedbackData = {
        name,
        email,
        order,
        rating,
        feedback,
        product,
        date: new Date().toISOString() // Add a timestamp for each feedback
    };

    // Retrieve existing feedback from local storage
    const storedFeedback = JSON.parse(localStorage.getItem('feedbacks')) || [];

    // Add new feedback to the list
    storedFeedback.push(feedbackData);

    // Store updated feedback list in local storage
    localStorage.setItem('feedbacks', JSON.stringify(storedFeedback));

    // Show thank you message
    document.getElementById('thankYouMessage').style.display = 'block';
    document.getElementById('feedbackForm').style.display = 'none';

    document.querySelector('.feedback-header').style.display = 'none';


    // Optionally, clear the form
    document.getElementById('feedbackForm').reset();
});

// Function to display retained feedback (for debugging or confirmation)
function displayRetainedFeedback() {
    const storedFeedback = JSON.parse(localStorage.getItem('feedbacks')) || [];
    console.log('Stored Feedback:', storedFeedback);
}


// cart java script

// Add an item to the cart 
function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} has been added to your cart.`);
}

// Load cart items 
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    let total = 0;
    cartItemsContainer.innerHTML = '';

    cart.forEach((item, index) => {
        const subtotal = item.price * item.quantity;
        total += subtotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>S$${item.price.toFixed(2)}</td>
            <td>
                <button onclick="updateQuantity(${index}, -1)">-</button>
                ${item.quantity}
                <button onclick="updateQuantity(${index}, 1)">+</button>
            </td>
            <td>S$${subtotal.toFixed(2)}</td>
            <td><button onclick="removeItem(${index})">Remove</button></td>
        `;
        cartItemsContainer.appendChild(row);
    });

    cartTotalElement.textContent = `S$${total.toFixed(2)}`;
}

// Update quantity 
function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart) return;

    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

// Remove an item 
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart) return;

    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

// Clear the entire cart
function clearCart() {
    localStorage.removeItem('cart');
    loadCart();
}


// Load cart on cart.html
if (document.title === "Cart") {
    loadCart();
}
function checkout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("Your cart is empty. Add items to proceed.");
        return;
    }
    alert("Proceeding to payment...");
    localStorage.removeItem('cart'); // Clear the cart
    loadCart(); // Reload the cart view to reflect the empty state
}
