const loginForm = document.querySelector('.login-form');
const signUpForm = document.querySelector('.signup-form');
const backLayer = document.querySelector('.back-layer');

document.querySelector('.login button').addEventListener('pointerdown', () => {
   signUpForm.classList.remove('active');
   loginForm.classList.add('active');
   backLayer.style.clipPath = '';
});

document.querySelector('.signup button').addEventListener('pointerdown', () => {
   loginForm.classList.remove('active');
   signUpForm.classList.add('active');
   backLayer.style.clipPath = 'inset(0 0 0 50%)';
});
