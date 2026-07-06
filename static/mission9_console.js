console.log("✅ JS Loaded");

const bootLines = [
"Initializing AI Diagnostic Core...",
"Checking Secure BIOS...",
"Loading Motherboard Firmware...",
"Scanning Voltage Rails...",
"Add all the Circuit Names In Order...",
"Do Not Add AI CORE..."
];


const bootText = document.getElementById("bootText");

let line = 0;

function typeBoot(){

    if(line < bootLines.length){

        let p = document.createElement("p");

        p.innerHTML = "> " + bootLines[line];

        bootText.appendChild(p);

        line++;

        setTimeout(typeBoot,700);


    }

    else{

        setTimeout(function(){

            document.getElementById("loginBox").style.display="block";

        },1000);

    }

}

typeBoot();

function checkPassword(){

    let pass = document.getElementById("password").value.toUpperCase();

    if(pass==="CPURAMUSBSSD"){

        document.getElementById("loginResult").innerHTML=
        "<span style='color:lime'>ACCESS GRANTED</span>";

        setTimeout(loadSystem,1000);

    }

    else{

        document.getElementById("loginResult").innerHTML=
        "<span style='color:red'>INVALID KEY</span>";

    }

}

function loadSystem(){

    document.getElementById("loginBox").style.display="none";

    document.getElementById("loading").style.display="block";

    setTimeout(function(){

        document.getElementById("fill").style.width="100%";

    },100);

    setTimeout(showDiagnostics,4500);

}

function showDiagnostics(){

    document.getElementById("loading").style.display="none";

    document.getElementById("diagnostics").style.display="block";

    document.getElementById("report").innerHTML=`

<h3>Voltage Analysis</h3>

<p>SSD ........... 6.0V ✅</p>

<p>RAM ........... 5.0V ✅</p>

<p>USB ........... 5.0V ✅</p>

<p style="color:red;font-weight:bold">
CPU ........... 0.0V ❌
</p>

<hr>

<p style="color:yellow">
POWER FAILURE DETECTED
</p>

<p>
The SSD Power Rail is receiving zero voltage.
Reconnect the missing motherboard trace.
</p>

`;

    document.getElementById("returnBtn").style.display="inline-block";

    localStorage.setItem("diagnostic","done");

}