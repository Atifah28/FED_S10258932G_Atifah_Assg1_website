
// Handle the "Submit Again" button click
function submitAgain() {
    // Show the feedback form again and hide the thank-you message
    document.getElementById("feedbackFormContainer").style.display = "block";
    document.getElementById("thankYouMessage").style.display = "none";
}

document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission behavior (no reload)
    
    // Hide the form and show the "Thank You" message
    document.getElementById("feedbackForm").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";
});

// Function to reset the form and show it again
function submitAgain() {
    document.getElementById("thankYouMessage").style.display = "none"; // Hide "Thank You" message
    document.getElementById("feedbackForm").style.display = "block";  // Show the form again
    document.getElementById("feedbackForm").reset(); // Clear form data



    // Optional: Reapply specific CSS styles if needed
    form.style.flexDirection = "column"; // Ensures layout remains as a column
    form.style.justifyContent = "center"; // Centers the form
    form.style.alignItems = "center";
}
