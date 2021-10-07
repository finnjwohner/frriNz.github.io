const btn = document.querySelector('button');
const img = document.querySelector('img');

btn.addEventListener('click', () => {
  btn.remove();
  img.style.visibility = 'visible';
});
