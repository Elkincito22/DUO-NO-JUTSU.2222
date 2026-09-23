
const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(a=>{
  if(a.getAttribute('href') === current) a.classList.add('active');
});
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
