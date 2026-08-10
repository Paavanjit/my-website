let clickCount = 0;

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('learnMoreBtn').addEventListener('click', function (e) {
  e.preventDefault();
  scrollToSection('about');

  clickCount = clickCount + 1;
  document.getElementById('clickCount').textContent = 'Learn More clicked ' + clickCount + ' times';
});

document.getElementById('aboutNavLink').addEventListener('click', function (e) {
  e.preventDefault();
  scrollToSection('about');
});