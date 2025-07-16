let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
let toggle = document.querySelector('#theme-toggle');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  header.classList.toggle('active');
  document.body.classList.toggle('active');
};

toggle.onclick = () => {
  document.body.classList.toggle('dark-mode');
  toggle.classList.toggle('fa-moon');
  toggle.classList.toggle('fa-sun');
};

// Scroll Highlight
window.onscroll = () => {
  if (window.innerWidth < 991) {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
    document.body.classList.remove('active');
  }

  document.querySelectorAll('section').forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      document.querySelectorAll('.header .navbar a').forEach(links => {
        links.classList.remove('active');
        document.querySelector('.header .navbar a[href*=' + id + ']').classList.add('active');
      });
    }
  });
};

// Typing effect
const typedSpan = document.querySelector('.typing');
const texts = ["Full Stack Web Developer", "Cybersecurity Enthusiast"];
let i = 0, j = 0, currentText = '', isDeleting = false;

function type() {
  if (i < texts.length) {
    if (!isDeleting && j <= texts[i].length) {
      currentText = texts[i].slice(0, ++j);
    } else if (isDeleting && j > 0) {
      currentText = texts[i].slice(0, --j);
    }

    typedSpan.textContent = currentText;

    if (!isDeleting && j === texts[i].length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }

    setTimeout(type, isDeleting ? 50 : 150);
  }
}
type();
