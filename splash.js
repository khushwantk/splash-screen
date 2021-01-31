anime({
    targets: "#amazing  path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutQuad",
    duration: 4000,
    delay: function (el, i) {
      return i * 100;
    },
    direction: "forward",
    loop: false,
  });

const splash=document.querySelector('.splash');
document.addEventListener('DOMContentLoaded',(e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    },5000);
})