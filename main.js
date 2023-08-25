// onclick turn button purple
const clickButton = document.querySelector('#clickbutton');

// smooth scroll on button
clickButton.addEventListener('click', () => {
window.scrollTo({
    top: window.scrollY + 560,
    behavior: 'smooth'
  });
});