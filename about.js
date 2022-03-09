const toggleButton = document.getElementsByClassName('menu')[0];
const navbarLinks = document.getElementsByClassName('nav-div')[0];
const x = document.querySelector('.cancel-img');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.add('active');
  toggleButton.style.display = 'none';
  x.style.display = 'block';
});

function closer() {
  x.style.display = 'none';
  navbarLinks.classList.remove('active');
  toggleButton.style.display = 'block';
}
x.addEventListener('click', closer);