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

