// =========================================
// CYBERESCAPE FINAL SCOREBOARD
// =========================================

const loadingBar = document.getElementById("loadingBar");
const loadingScreen = document.getElementById("loadingScreen");

const report = document.getElementById("report");
const glitch = document.getElementById("glitchEnding");
const thankYou = document.getElementById("thankYou");

// =========================================
// Loading Animation
// =========================================

let progress = 0;

const loading = setInterval(function(){

    progress++;

    loadingBar.style.width = progress + "%";

    if(progress >= 100){

        clearInterval(loading);

        loadingScreen.style.display = "none";

        showReport();

    }

},40);

// =========================================

function showReport(){

    report.style.display="block";

    report.style.opacity="0";

    let fade = 0;

    let interval = setInterval(function(){

        fade += 0.05;

        report.style.opacity = fade;

        if(fade>=1){

            clearInterval(interval);

        }

    },40);

    animateNumbers();

}

// =========================================
// Score Animation
// =========================================

function animateNumbers(){

    animateValue("m1",0,100,600);
    animateValue("m2",0,100,700);
    animateValue("m3",0,75,800);
    animateValue("m4",0,100,900);
    animateValue("m5",0,100,1000);
    animateValue("m6",0,75,1100);
    animateValue("m7",0,100,1200);
    animateValue("m8",0,100,1300);
    animateValue("m9",0,100,1400);
    animateValue("m10",0,100,1500);

    setTimeout(function(){

        animateTotal();

    },1700);

}

// =========================================

function animateValue(id,start,end,duration){

    let obj=document.getElementById(id);

    let current=start;

    let step=Math.ceil(end/25);

    let interval=setInterval(function(){

        current+=step;

        if(current>=end){

            current=end;

            clearInterval(interval);

        }

        obj.innerHTML=current;

    },duration/25);

}

// =========================================

function animateTotal(){

    let total=document.getElementById("totalScore");

    let value=0;

    let interval=setInterval(function(){

        value+=38;

        if(value>=950){

            value=950;

            clearInterval(interval);

            setTimeout(showRank,1000);

        }

        total.innerHTML=value+" / 1000";

    },40);

}

// =========================================

function showRank(){

    document.getElementById("rankText").style.animation="pulse 1s infinite";

    setTimeout(showStats,2500);

}

// =========================================

function showStats(){

    document.querySelector(".stats").style.opacity="0";

    document.querySelector(".stats").style.transition="1s";

    document.querySelector(".stats").style.opacity="1";

    setTimeout(showGlitch,6000);

}

// =========================================

function showGlitch(){

    report.style.display="none";

    glitch.style.display="block";

    glitch.style.opacity="0";

    glitch.style.transition="1s";

    glitch.style.opacity="1";

    setTimeout(function(){

        document.querySelector("#glitchEnding h2").innerHTML="REBOOTING...";

    },1500);

    setTimeout(function(){

        document.querySelector("#glitchEnding h1").innerHTML=":)";

    },3000);

    setTimeout(function(){

        glitch.style.display="none";

        showThankYou();

    },5000);

}

// =========================================

function showThankYou(){

    thankYou.style.display="block";

    thankYou.style.opacity="0";

    thankYou.style.transition="2s";

    thankYou.style.opacity="1";

}