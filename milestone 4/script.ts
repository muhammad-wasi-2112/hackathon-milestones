// Selecting the form and resume display area
const getform = document.getElementById('res-form') as HTMLFormElement;
const displayform = document.getElementById('res-disp') as HTMLDivElement;

// Check if form element exists
if (getform) {
  // Adding event listener for form submission
  getform.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent default form submission

    // Fetching values from the form inputs
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('Email') as HTMLInputElement).value;
    const phone = (document.getElementById('Phone') as HTMLInputElement).value;
    const education = (document.getElementById('edu') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('exp') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('ski') as HTMLTextAreaElement).value;

    // Generating HTML content to display the resume
    const resHTML = `
      <h2><b>Editable Resume</b></h2>
      <h3>Personal Information</h3>
      <p><b>Name:</b><span contenteditable="true"> ${name}</span></p>
      <p><b>Email:</b><span contenteditable="true"> ${email}</span></p>
      <p><b>Phone:</b><span contenteditacoble="true"> ${phone}</span></p>
      
      <h3>Education</h3>
      <p contenteditacoble="true">${education}</p>
      
      <h3>Experience</h3>
      <p contenteditacoble="true">${experience}</p>
      
      <h3>Skills</h3>
      <p contenteditacoble="true">${skills}</p>
    `;

    // Display the generated resume
    if (displayform) {
      displayform.innerHTML = resHTML;
    } else {
      console.error("Display element is missing");
    }
  });
} else {
  console.error("Form element is missing");
}
