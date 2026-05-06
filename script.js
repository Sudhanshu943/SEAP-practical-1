// Contact form submission handler
function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    const errorMsg = document.getElementById('form-error');
    errorMsg.style.display = 'block';
    return;
  }

  // Hide any previous error message
  const errorMsg = document.getElementById('form-error');
  errorMsg.style.display = 'none';

  // Reset the form fields
  event.target.reset();

  // Show the success message
  const successMsg = document.getElementById('form-success');
  successMsg.style.display = 'block';

  // Hide the success message after 4 seconds
  setTimeout(() => {
    successMsg.style.display = 'none';
  }, 4000);
}

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function onScroll() {
  let scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + sectionId) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', onScroll);
