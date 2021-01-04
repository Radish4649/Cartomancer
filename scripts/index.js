const bg = document.querySelector('.mouse-move');
const windowWidth = window.innerWidth / 5;
const windowHeight = window.innerHeight / 5 ;

document.querySelector(".page-grid").addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / (windowWidth * 2);
  const mouseY = e.clientY / (windowHeight * 2);
  
  bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});