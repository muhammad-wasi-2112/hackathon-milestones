// Selecting the form and resume display area
var getform = document.getElementById('res-form');
var displayform = document.getElementById('res-disp');
// Check if form element exists
if (getform) {
    // Adding event listener for form submission
    getform.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
        // Fetching values from the form inputs
        var name = document.getElementById('name').value;
        var email = document.getElementById('Email').value;
        var phone = document.getElementById('Phone').value;
        var education = document.getElementById('edu').value;
        var experience = document.getElementById('exp').value;
        var skills = document.getElementById('ski').value;
        // Generating HTML content to display the resume
        var resHTML = "\n      <h2><b>Resume</b></h2>\n      <h3>Personal Information</h3>\n      <p><b>Name:</b> ".concat(name, "</p>\n      <p><b>Email:</b> ").concat(email, "</p>\n      <p><b>Phone:</b> ").concat(phone, "</p>\n      \n      <h3>Education</h3>\n      <p>").concat(education, "</p>\n      \n      <h3>Experience</h3>\n      <p>").concat(experience, "</p>\n      \n      <h3>Skills</h3>\n      <p>").concat(skills, "</p>\n    ");
        // Display the generated resume
        if (displayform) {
            displayform.innerHTML = resHTML;
        }
        else {
            console.error("Display element is missing");
        }
    });
}
else {
    console.error("Form element is missing");
}
