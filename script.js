
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission
  // Handle form data (e.g., send it to a server)
  console.log('Form submitted!');
});
