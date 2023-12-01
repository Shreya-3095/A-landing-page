let menu = document.querySelector('nav');
let menuBtn = document.querySelector('.menu-btn');
let closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click',function(){
  menu.classList.add('active');
})
closeBtn.addEventListener('click',function(){
  menu.classList.remove('active');
})
const bodyEl = document.querySelector("body");
const toggleEl = document.querySelector(".fa-moon");

toggleEl.addEventListener("click", () => {
  bodyEl.classList.toggle("dark");
  if (bodyEl.classList.contains("dark")) {
    toggleEl.classList.replace("fa-moon", "fa-sun");
  } else {
    toggleEl.classList.replace("fa-sun", "fa-moon");
  }
});