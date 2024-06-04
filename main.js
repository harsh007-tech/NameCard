const comp = document.querySelector('.orange');
setInterval(function() {comp.style.transform='translate(-5px,-10px)';comp.style.transition='all 1s';}, 500)
setInterval(function() {comp.style.transform='translate(+5px,+10px)';comp.style.transition='all 1s';}, 1000)
