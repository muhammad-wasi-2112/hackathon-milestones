// Selecting the form and resume display area
const getform = document.getElementById('res-form') as HTMLFormElement;
const displayform = document.getElementById('res-disp') as HTMLDivElement;

const shareableLinkContainer = document.getElementById('Shareable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdf = document.getElementById('download-pdf') as HTMLButtonElement;

// Ensure username is fetched only after form submission or URL load
let username: string = '';

// Check if form element exists
if (getform) {
  // Adding event listener for form submission
  getform.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent default form submission

    // Fetching values from the form inputs
    username = (document.getElementById('username') as HTMLInputElement).value.trim();
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('Email') as HTMLInputElement).value;
    const phone = (document.getElementById('Phone') as HTMLInputElement).value;
    const education = (document.getElementById('edu') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('exp') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('ski') as HTMLTextAreaElement).value;

    if (!username) {
      alert('Please enter a username');
      return;
    }

    // Store resume data in localStorage
    const resumeData = { name, email, phone, education, experience, skills };
    localStorage.setItem(username, JSON.stringify(resumeData));

    // Generating HTML content to display the resume
    const resHTML = `
      <h2><b>Shareable Resume</b></h2>
      <h3>Personal Information</h3>
      <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
      <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
      <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
      
      <h3>Education</h3>
      <p contenteditable="true">${education}</p>
      
      <h3>Experience</h3>
      <p contenteditable="true">${experience}</p>
      
      <h3>Skills</h3>
      <p contenteditable="true">${skills}</p>
    `;

    // Display the resume in the div
    if (displayform) {
      displayform.innerHTML = resHTML;
    }

    // Generate and display the shareable link
    const shareableURL = `${window.location.origin}${window.location.pathname}?username=${encodeURIComponent(username)}`;
    if (shareableLinkContainer && shareableLinkElement) {
      shareableLinkContainer.style.display = 'block';
      shareableLinkElement.href = shareableURL;
      shareableLinkElement.textContent = shareableURL;
    }
  });

  // Event listener for download button
  if (downloadPdf) {
    downloadPdf.addEventListener('click', () => {
      window.print();
    });
  }

  // On page load, check if a username is in the URL and display saved resume
  window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlUsername = urlParams.get('username');

    if (urlUsername) {
      const savedResumeData = localStorage.getItem(urlUsername);
      if (savedResumeData) {
        const resumeData = JSON.parse(savedResumeData);

        // Prefill form fields
        (document.getElementById('username') as HTMLInputElement).value = urlUsername;
        (document.getElementById('name') as HTMLInputElement).value = resumeData.name || '';
        (document.getElementById('Email') as HTMLInputElement).value = resumeData.email || '';
        (document.getElementById('Phone') as HTMLInputElement).value = resumeData.phone || '';
        (document.getElementById('edu') as HTMLTextAreaElement).value = resumeData.education || '';
        (document.getElementById('exp') as HTMLTextAreaElement).value = resumeData.experience || '';
        (document.getElementById('ski') as HTMLTextAreaElement).value = resumeData.skills || '';

        // Auto-fill resume display area
        const resHTML = `
          <h2><b>Shareable Resume</b></h2>
          <h3>Personal Information</h3>
          <p><b>Name:</b> <span contenteditable="true">${resumeData.name}</span></p>
          <p><b>Email:</b> <span contenteditable="true">${resumeData.email}</span></p>
          <p><b>Phone:</b> <span contenteditable="true">${resumeData.phone}</span></p>
          
          <h3>Education</h3>
          <p contenteditable="true">${resumeData.education}</p>
          
          <h3>Experience</h3>
          <p contenteditable="true">${resumeData.experience}</p>
          
          <h3>Skills</h3>
          <p contenteditable="true">${resumeData.skills}</p>
        `;
        if (displayform) {
          displayform.innerHTML = resHTML;
        }
      } else {
        alert('No resume found for the provided username.');
      }
    }
  });
} else {
  console.error("Form element is missing");
}
