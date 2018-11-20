

const village = new Array(100);
const houses = document.getElementsByClassName("house");
let dead = document.getElementsByClassName('dead');
const killCounter = document.getElementById('counter');
const deathIcon = '<i class="fas fa-skull-crossbones"></i>';
let zombies = 1;
let rounds = 0;


function zombieConvert() {
  let random = Math.floor(Math.random() * (houses.length)) ;
  houses[random].classList.replace('alive', 'dead'); 
}


for(var i = 0; i < village.length; i++){
  document.getElementById('village')
  .innerHTML += `<li id= ${i+1} class="house alive"><i class="fas fa-home"></i></li>`;
}

function stop() {
  invation = false;
}
function reset() {
  window.location.reload();
}

let invation = true;
function start() {
  if (invation !== true) return;
  if (zombies == 101) return;
  if(dead.length == 100) return;

  rounds++
  
  for(let i = 0; i < zombies; i++){
    zombieConvert();
    killCounter.innerHTML = `Dead: ${dead.length} ${deathIcon}, Rounds: ${rounds}`;
  }
  window.setTimeout(start, 1500);
  zombies = dead.length +1;
}
document.getElementById("resetBtn").addEventListener("click", reset);
document.getElementById("stopBtn").addEventListener("click", stop);
document.getElementById("startBtn").addEventListener("click", start);
