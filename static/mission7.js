// ===============================
// MISSION 7 - MEMORY WIPE
// PART 1
// ===============================
startMission();
const status = document.getElementById("status");
const memoryColor = document.getElementById("memoryColor");
const memoryCode = document.getElementById("memoryCode");
const questionBox = document.getElementById("questionBox");
const question = document.getElementById("question");
const choices = document.getElementById("choices");
const result = document.getElementById("result");

let attempt = 1;
let score = 100;

let codes = [];
let answerIndex = 0;
let answerColor = "";

// ---------------------------------

const colorNames = [
    "GREEN",
    "YELLOW",
    "RED"
];

const colorClasses = [
    "green",
    "yellow",
    "red"
];

// ---------------------------------

function randomCode(){

    const chars="ABCDEFGHJKLMNPQRSTUVWXYZ123456789";

    let code="";

    for(let i=0;i<7;i++){

        code += chars[Math.floor(Math.random()*chars.length)];

    }

    return code;

}

// ---------------------------------

function generateCodes(){

    codes=[];

    for(let i=0;i<3;i++){

        codes.push(randomCode());

    }

    answerIndex=Math.floor(Math.random()*3);

    answerColor=colorNames[answerIndex];

}

// ---------------------------------

function sleep(ms){

    return new Promise(resolve=>setTimeout(resolve,ms));

}

// ---------------------------------

async function showCodes(){

    questionBox.style.display="none";

    result.innerHTML="";

   status.innerHTML="WATCH CAREFULLY...";

    for(let i=0;i<3;i++){

        memoryColor.innerHTML=colorNames[i];

        memoryColor.className=colorClasses[i];

        memoryCode.className=colorClasses[i];

        memoryCode.innerHTML=codes[i];

        await sleep(2500);

    }

    glitchErase();

}

// ---------------------------------

async function glitchErase(){

    status.innerHTML="MEMORY WIPE IN PROGRESS";

    memoryCode.className="red glitch";

    memoryCode.innerHTML="#######";

    await sleep(400);

    memoryCode.innerHTML="##X####";

    await sleep(300);

    memoryCode.innerHTML="#X##X##";

    await sleep(300);

    memoryCode.innerHTML="MEMORY ERASED";

    memoryColor.innerHTML="";

    await sleep(700);

    askQuestion();

}

// ---------------------------------

function askQuestion(){

    questionBox.style.display="block";

    status.innerHTML="MEMORY TEST";

    question.innerHTML="Which <span style='color:cyan'>"+answerColor+"</span> code appeared?";

    let options=[...codes];

    options.sort(()=>Math.random()-0.5);

    choices.innerHTML="";

    options.forEach(function(code){

        choices.innerHTML +=
        `<button onclick="checkAnswer('${code}')">${code}</button>`;

    });

}

// ---------------------------------

function startRound(){

    generateCodes();

    showCodes();

}

// ---------------------------------

window.onload=function(){

    status.innerHTML="AI INITIALIZING...";

    setTimeout(function(){

       status.innerHTML="LOADING ENCRYPTED MEMORY...";

    },1500);

    setTimeout(function(){

        startRound();

    },3000);

};

// =====================================
// PART 2
// =====================================

function checkAnswer(selected){

    let correctCode = codes[answerIndex];

    // -----------------------
    // CORRECT
    // -----------------------

    if(selected === correctCode){

        if(attempt===1){

            score=100;

        }else{

            score=75;

        }

        result.innerHTML=`

        <h2 style="color:lime;">

        MEMORY RESTORED

        </h2>

        <h3>

        SCORE : ${score}

        </h3>

        <p>

        Loading Mission 8...

        </p>

        `;

        status.innerHTML="ACCESS GRANTED";

        setTimeout(function(){

            window.location.href="/mission8";

        },3000);

        return;

    }

    // -----------------------
    // WRONG
    // -----------------------

    if(attempt===1){

        attempt++;

        score=75;

        result.innerHTML=`

        <h2 style="color:red;">

        WRONG MEMORY

        </h2>

        <p>

        AI is generating a NEW memory...

        </p>

        `;

        status.innerHTML="SECOND ATTEMPT";

        setTimeout(function(){

            result.innerHTML="";

            startRound();

        },2500);

    }

    else{

        score=40;

        result.innerHTML=`

        <h2 style="color:red;">

        MEMORY LOST

        </h2>

        <h3>

        SCORE : ${score}

        </h3>

        <p>

        Partial data recovered...

        </p>

        <p>

        Loading Mission 8...

        </p>

        `;

        status.innerHTML="PARTIAL SUCCESS";

       finishMission(7);

setTimeout(function(){
    window.location.href="/mission8";
},3000);
    }

}