const emailElement = document.getElementById('email');

emailElement.addEventListener('mouseover', () => {
  emailElement.innerHTML = 'hussainmustaque98407@gmail.com';
});

emailElement.addEventListener('mouseout', () => {
  emailElement.innerHTML = 'Email';
});
