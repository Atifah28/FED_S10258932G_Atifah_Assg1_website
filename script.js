// JavaScript to handle form submission and local storage
document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieve form values
    const feedbackData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        order: document.getElementById('order').value,
        rating: document.getElementById('rating').value,
        feedback: document.getElementById('feedback').value,
        product: document.getElementById('product').value,
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

    // Optionally, clear the form
    document.getElementById('feedbackForm').reset();
});

// Function to display retained feedback (for debugging or confirmation)
function displayRetainedFeedback() {
    const storedFeedback = JSON.parse(localStorage.getItem('feedbacks')) || [];
    console.log('Stored Feedback:', storedFeedback);
}

// Call this function on page load to check retained data
document.addEventListener('DOMContentLoaded', displayRetainedFeedback);
