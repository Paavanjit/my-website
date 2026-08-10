let clickCount = 0;

document.getElementById('learnMoreBtn').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });

  clickCount = clickCount + 1;
  document.getElementById('clickCount').textContent = 'Learn More clicked ' + clickCount + ' times';
});

document.getElementById('aboutNavLink').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});