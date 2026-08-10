let clickCount = 0;

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function getClickMessage(count) {
  if (count === 1) {
    return 'Learn More clicked 1 time';
  } else {
    return 'Learn More clicked ' + count + ' times';
  }
}

document.getElementById('learnMoreBtn').addEventListener('click', function (e) {
  e.preventDefault();
  scrollToSection('about');

  clickCount = clickCount + 1;
  document.getElementById('clickCount').textContent = getClickMessage(clickCount);
});

document.getElementById('aboutNavLink').addEventListener('click', function (e) {
  e.preventDefault();
  scrollToSection('about');
});