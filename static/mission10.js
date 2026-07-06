// ==============================
// CYBERESCAPE - MISSION 10
// PART 1
// ==============================

const dialog = document.getElementById("dialog");
const timerText = document.getElementById("timer");
const message = document.getElementById("message");

const locks = [
document.getElementById("lock1"),
document.getElementById("lock2"),
document.getElementById("lock3"),
document.getElementById("lock4"),
document.getElementById("lock5"),
document.getElementById("lock6")
];

const lights = [
document.getElementById("s1"),
document.getElementById("s2"),
document.getElementById("s3"),
document.getElementById("s4"),
document.getElementById("s5"),
document.getElementById("s6")
];

// -----------------------------

let currentLock = 0;

let solvedLocks = 0;

let timer = 60;

let countdown;

let canClick = false;

let currentPattern = [];

let playerPattern = [];

// -----------------------------

const aiLines=[

"INITIALIZING AI SECURITY...",

"CHECKING SECURITY CHANNELS...",

"LOADING ENCRYPTION MATRIX...",

"FINAL LOCKDOWN ACTIVATED...",

"WARNING : UNAUTHORIZED USER DETECTED",

"DISABLE ALL SIX SECURITY CHANNELS"

];

// -----------------------------

let line = 0;

function aiDialogue(){

if(line<aiLines.length){

dialog.innerHTML=aiLines[line];

line++;

setTimeout(aiDialogue,1800);

}

else{

startLock();

}

}

setTimeout(aiDialogue,1000);

// ==============================
// RANDOM PATTERN
// ==============================

function generatePattern(){

currentPattern=[];

let length=Math.floor(Math.random()*3)+3;

// 3-5 steps

for(let i=0;i<length;i++){

currentPattern.push(

Math.floor(Math.random()*6)

);

}

}

// ==============================
// SHOW PATTERN
// ==============================

function showPattern(){

message.innerHTML="MEMORIZE";

canClick=false;

let i=0;

let interval=setInterval(function(){

locks.forEach(lock => {

    lock.querySelector(".ring").classList.remove("active");

    lock.querySelector(".node").classList.remove("active");

});

if(i==currentPattern.length){

clearInterval(interval);

setTimeout(function(){

message.innerHTML="REPEAT";

startTimer();

canClick=true;

},700);

return;

}

locks[currentPattern[i]].querySelector(".ring").classList.add("active");
locks[currentPattern[i]].querySelector(".node").classList.add("active");
i++;

},700);

}

// ==============================
// START TIMER
// ==============================

function startTimer(){

timer=60;

timerText.innerHTML=timer;

clearInterval(countdown);

countdown=setInterval(function(){

timer--;

timerText.innerHTML=timer;

if(timer<=0){

clearInterval(countdown);

failLock();

}

},1000);

}

// ==============================
// START CURRENT LOCK
// ==============================

function startLock(){

if(solvedLocks>=6){

missionComplete();

return;

}

dialog.innerHTML=

"SECURITY CHANNEL "+(currentLock+1);

generatePattern();

playerPattern=[];

setTimeout(showPattern,1200);

}



// ==============================
// PLAYER CLICK
// ==============================

function playerClick(lockNumber){

if(!canClick) return;

playerPattern.push(lockNumber-1);

let index = playerPattern.length-1;

// Wrong Click

if(playerPattern[index] != currentPattern[index]){

failLock();

return;

}

// Finished Pattern

if(playerPattern.length == currentPattern.length){

successLock();

}

}

// ==============================
// SUCCESS
// ==============================

function successLock(){

clearInterval(countdown);

canClick=false;

dialog.innerHTML="CHANNEL "+(currentLock+1)+" DISABLED";

locks[currentLock].querySelector(".ring").classList.remove("active");
locks[currentLock].querySelector(".node").classList.remove("active");

// Glow ONLY the ring
locks[currentLock].querySelector(".ring").classList.add("success");

lights[currentLock].innerHTML="🟢";

solvedLocks++;

currentLock++;

setTimeout(function(){

startLock();

},2000);

}

// ==============================
// FAILURE
// ==============================

function failLock(){

clearInterval(countdown);

canClick=false;

dialog.innerHTML="ACCESS DENIED";

locks[currentLock].querySelector(".ring").classList.add("fail");
locks[currentLock].querySelector(".node").classList.add("fail");
lights[currentLock].innerHTML="🔴";

setTimeout(function(){

locks[currentLock].querySelector(".ring").classList.remove("fail");
locks[currentLock].querySelector(".node").classList.remove("fail");

lights[currentLock].innerHTML="⚪";

dialog.innerHTML="GENERATING NEW ENCRYPTION";

generatePattern();

playerPattern=[];

setTimeout(showPattern,2000);

},1800);

}

// ==============================
// FINAL
// ==============================

function missionComplete(){

message.innerHTML="";

clearInterval(countdown);

dialog.innerHTML="";

const finalText=[

"........",

"ALL SIX  SECURITY CHANNELS BREACHED",

"FIREWALL FAILURE",

"AI CORE EXPOSED",

"BEGINNING CORE DESTRUCTION",

"MISSION COMPLETE"

];

let i=0;

function nextLine(){

if(i<finalText.length){

dialog.innerHTML=finalText[i];

i++;

setTimeout(nextLine,1800);

}

else{

destroyCore();

}

}

nextLine();

}

// ==============================
// DESTROY CORE
// ==============================

function destroyCore(){

document.querySelector(".centerCore").style.transition="2s";

document.querySelector(".centerCore").style.transform=

"translate(-50%,-50%) scale(2.2)";

document.querySelector(".coreGlow").style.opacity="1";

document.querySelector(".coreGlow").style.filter="blur(120px)";

setTimeout(function(){

document.querySelector(".centerCore").style.background="red";

document.querySelector(".coreText").innerHTML="DESTROYED";

},2000);

setTimeout(function(){

document.body.style.background="white";

},3500);

setTimeout(function(){

window.location.href = "/scoreboard";

},5000);

}