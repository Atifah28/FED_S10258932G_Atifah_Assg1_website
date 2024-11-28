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
