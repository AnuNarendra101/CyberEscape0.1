// ===========================
// CYBERESCAPE SCORE ENGINE
// ===========================

let startTime;
let attempts;

// Start Mission
function startMission(){

    startTime = Date.now();

    attempts = 1;

}

// Retry
function retryMission(){

    attempts = 2;

}

// Mission Completed
function finishMission(mission){

    let timeTaken = Math.floor((Date.now()-startTime)/1000);

    let baseScore = (attempts==1) ? 100 : 75;

    // Time penalty
    let penalty = Math.floor(timeTaken/10)*2;

    let finalScore = Math.max(baseScore-penalty,30);

    localStorage.setItem("mission"+mission+"_status","PASS");
    localStorage.setItem("mission"+mission+"_attempt",attempts);
    localStorage.setItem("mission"+mission+"_time",timeTaken);
    localStorage.setItem("mission"+mission+"_score",finalScore);

}

// Failed twice
function failMission(mission){

    let timeTaken = Math.floor((Date.now()-startTime)/1000);

    localStorage.setItem("mission"+mission+"_status","FAIL");
    localStorage.setItem("mission"+mission+"_attempt",2);
    localStorage.setItem("mission"+mission+"_time",timeTaken);
    localStorage.setItem("mission"+mission+"_score",30);

}