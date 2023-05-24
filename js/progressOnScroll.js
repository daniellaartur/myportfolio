const progress = document.querySelector('.progress');
document.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progressWidth = Math.floor(100 * scroll / height);
progress.style.width = `${progressWidth}%`;
}, { passive: true })