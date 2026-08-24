const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('#nav');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('show')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const progress=document.querySelector('.progress');
window.addEventListener('scroll',()=>{
  const h=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(window.scrollY/h*100)+'%';
});
document.getElementById('year').textContent=new Date().getFullYear();
