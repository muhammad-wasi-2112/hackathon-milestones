// Selecting the form and resume display area
var getform = document.getElementById('res-form');
var displayform = document.getElementById('res-disp');
var shareableLinkContainer = document.getElementById('Shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdf = document.getElementById('download-pdf');
// Ensure username is fetched only after form submission or URL load
var username = '';
// Check if form element exists
if (getform) {
    // Adding event listener for form submission
    getform.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
        // Fetching values from the form inputs
        username = document.getElementById('username').value.trim();
        var name = document.getElementById('name').value;
        var email = document.getElementById('Email').value;
        var phone = document.getElementById('Phone').value;
        var education = document.getElementById('edu').value;
        var experience = document.getElementById('exp').value;
        var skills = document.getElementById('ski').value;
        if (!username) {
            alert('Please enter a username');
            return;
        }
        // Store resume data in localStorage
        var resumeData = { name: name, email: email, phone: phone, education: education, experience: experience, skills: skills };
        localStorage.setItem(username, JSON.stringify(resumeData));
        // Generating HTML content to display the resume
        var resHTML = "\n      <h2><b>Shareable Resume</b></h2>\n      <h3>Personal Information</h3>\n      <p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n      <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n      <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n      \n      <h3>Education</h3>\n      <p contenteditable=\"true\">").concat(education, "</p>\n      \n      <h3>Experience</h3>\n      <p contenteditable=\"true\">").concat(experience, "</p>\n      \n      <h3>Skills</h3>\n      <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
        // Display the resume in the div
        if (displayform) {
            displayform.innerHTML = resHTML;
        }
        // Generate and display the shareable link
        var shareableURL = "".concat(window.location.origin).concat(window.location.pathname, "?username=").concat(encodeURIComponent(username));
        if (shareableLinkContainer && shareableLinkElement) {
            shareableLinkContainer.style.display = 'block';
            shareableLinkElement.href = shareableURL;
            shareableLinkElement.textContent = shareableURL;
        }
    });
    // Event listener for download button
    if (downloadPdf) {
        downloadPdf.addEventListener('click', function () {
            window.print();
        });
    }
    // On page load, check if a username is in the URL and display saved resume
    window.addEventListener('DOMContentLoaded', function () {
        var urlParams = new URLSearchParams(window.location.search);
        var urlUsername = urlParams.get('username');
        if (urlUsername) {
            var savedResumeData = localStorage.getItem(urlUsername);
            if (savedResumeData) {
                var resumeData = JSON.parse(savedResumeData);
                // Prefill form fields
                document.getElementById('username').value = urlUsername;
                document.getElementById('name').value = resumeData.name || '';
                document.getElementById('Email').value = resumeData.email || '';
                document.getElementById('Phone').value = resumeData.phone || '';
                document.getElementById('edu').value = resumeData.education || '';
                document.getElementById('exp').value = resumeData.experience || '';
                document.getElementById('ski').value = resumeData.skills || '';
                // Auto-fill resume display area
                var resHTML = "\n          <h2><b>Shareable Resume</b></h2>\n          <h3>Personal Information</h3>\n          <p><b>Name:</b> <span contenteditable=\"true\">".concat(resumeData.name, "</span></p>\n          <p><b>Email:</b> <span contenteditable=\"true\">").concat(resumeData.email, "</span></p>\n          <p><b>Phone:</b> <span contenteditable=\"true\">").concat(resumeData.phone, "</span></p>\n          \n          <h3>Education</h3>\n          <p contenteditable=\"true\">").concat(resumeData.education, "</p>\n          \n          <h3>Experience</h3>\n          <p contenteditable=\"true\">").concat(resumeData.experience, "</p>\n          \n          <h3>Skills</h3>\n          <p contenteditable=\"true\">").concat(resumeData.skills, "</p>\n        ");
                if (displayform) {
                    displayform.innerHTML = resHTML;
                }
            }
            else {
                alert('No resume found for the provided username.');
            }
        }
    });
}
else {
    console.error("Form element is missing");
}
