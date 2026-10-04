// Profil Muhammad Alfaraldi Raihan - script utama

// muncul saat di-scroll
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {threshold:.12});
document.querySelectorAll('.rv').forEach(el => io.observe(el));
// perbesar sertifikat
const lb = document.getElementById('lb'), lbImg = lb.querySelector('img');
document.querySelectorAll('.zoom').forEach(b => b.addEventListener('click', () => {
  lbImg.src = b.dataset.full; lbImg.alt = b.querySelector('img').alt; lb.showModal();
}));
lb.addEventListener('click', () => lb.close());
// percikan kotak kecil saat tombol ditekan
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const colors = ['#FF6B9D','#7B5CFF','#FFD93D','#FFFDF8'];
  document.querySelectorAll('.btn').forEach(b => b.addEventListener('click', e => {
    for (let i = 0; i < 10; i++) {
      const s = document.createElement('i'); s.className = 'burst';
      s.style.left = e.clientX + 'px'; s.style.top = e.clientY + 'px';
      s.style.background = colors[i % 4];
      s.style.setProperty('--x', (Math.random()*160-80) + 'px');
      s.style.setProperty('--y', (Math.random()*160-80) + 'px');
      s.style.setProperty('--r', (Math.random()*360) + 'deg');
      document.body.appendChild(s); setTimeout(() => s.remove(), 700);
    }
  }));
}
