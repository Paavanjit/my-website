let clickCount = 0;

fetch('https://api.open-meteo.com/v1/forecast?latitude=31.33&longitude=75.58&current_weather=true')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    document.getElementById('temperature').textContent =
      'Current temperature: ' + data.current_weather.temperature + '°C';
  })
  .catch(function (error) {
    document.getElementById('temperature').textContent = 'Temperature unavailable right now.';
  });

const navLinks = ['Home', 'About', 'Contact'];

document.getElementById('sectionList').textContent =
  'This site has ' + navLinks.length + ' sections: ' + navLinks.join(', ');

const siteInfo = {
  title: 'My First Website',
  author: 'A learner',
  sectionCount: navLinks.length
};

document.getElementById('siteAuthor').textContent = 'Built by: ' + siteInfo.author;

let sectionListText = 'Sections: ';

for (const link of navLinks) {
  sectionListText = sectionListText + link + ' ';
}

document.getElementById('loopedList').textContent = sectionListText;

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

  document.getElementById('aboutHeading').style.color = '#3b82f6';
});

document.getElementById('aboutNavLink').addEventListener('click', function (e) {
  e.preventDefault();
  scrollToSection('about');
});

let submissionCount = 0;

function buildGreeting(name, count) {
  if (name.trim() === '') {
    return 'Please enter your name first.';
  }

  let sections = '';
  for (const link of navLinks) {
    sections = sections + link + ' ';
  }

  let visitText;
  if (count === 1) {
    visitText = 'This is your 1st message.';
  } else {
    visitText = 'This is your ' + count + 'th submission.';
  }

  return 'Hello, ' + name + '! This site has ' + siteInfo.sectionCount +
    ' sections: ' + sections.trim() + '. ' + visitText;
}

document.getElementById('nameForm').addEventListener('submit', function (e) {
  e.preventDefault();

  submissionCount = submissionCount + 1;
  const name = document.getElementById('nameInput').value;
  document.getElementById('greeting').textContent = buildGreeting(name, submissionCount);

  fetch('https://api.agify.io/?name=' + name)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const currentText = document.getElementById('greeting').textContent;
      document.getElementById('greeting').textContent =
        currentText + ' People named ' + name + ' are often around ' + data.age + ' years old.';

      document.getElementById('rawJson').textContent = JSON.stringify(data);
    })
    .catch(function (error) {
      document.getElementById('greeting').textContent =
        "Sorry, we couldn't get the API information right now.";
    });
});