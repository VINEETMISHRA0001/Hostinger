
let nav_toggle = document.querySelector('.nav_toggle');
let nav_toggle_icon = document.querySelector('.nav_toggle ion-icon');
let nav_menu = document.querySelector('.nav_menu');

nav_toggle.addEventListener('click', () => {
  nav_menu.classList.toggle('active');
  nav_toggle_icon.setAttribute('name',
    nav_menu.classList.contains('active') ? 'close-outline' : 'menu-outline'
  );
});


const btn = document.getElementById('btn');
const content = document.querySelectorAll('.hosting__content');

btn.addEventListener('click', ()=>{
  content.forEach(el => {
    el.classList.toggle('visible');
  })
})

const button = document.querySelector('.btn-toggle');

btn.addEventListener('click', ()=>{
  if (button.textContent === 'See All Features'){
    button.textContent='See Less';
  }
  else{
    button.textContent='See All Features'
  }
})

