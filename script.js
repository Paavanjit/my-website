let clickCount = 0;

function scrollToAbout() {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('learnMoreBtn').addEventListener('click', function (e) {
  e.preventDefault();
  scrollToAbout();

  clickCount = clickCount + 1;
  document.getElementById('clickCount').textContent = 'Learn More clicked ' + clickCount + ' times';
});

document.getElementById('aboutNavLink').addEventListener('click', function (e) {
  e.preventDefault();
  scrollToAbout();
});