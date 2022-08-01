const holes=document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreBoard= document.querySelector('.score');

let lastHole;   
let timeUp=false;
let score=0;

function randomTime (min,max) {
return Math.floor(Math.random() *(min - max)) + max;
}

function randomHole (holes) {
const random=Math.floor(Math.random()*holes.length);
const hole=holes[random]
// if (hole=== lastHole){
// return randomHole(holes);

// }
lastHole=hole;
return hole
}

function peep(){
    const time=randomTime(200,1000 );
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(()=>{
            hole.classList.remove('up');
            if(!timeUp) peep();
    },time);
    
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 15000) 

}

function golpear(e){

    if (!e.isTrusted) return;
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent=score;
}

moles.forEach(mole=>mole.addEventListener('click',golpear));
