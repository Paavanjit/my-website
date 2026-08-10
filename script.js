document.getElementById('learnMoreBtn').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});