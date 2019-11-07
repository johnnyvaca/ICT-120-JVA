function alerts(event) {

    // if(txt.value === "")
    //  alert("Vous n'avez pas remplis la zone de texte");
    event.preventDefault();
    txt2.value = txt.value;
    txt.value = "";
}
gos.addEventListener("click", alerts);

function a11() {
    imagess.setAttribute("src", "go.png");
}

function a22() {
    imagess.setAttribute("src", "marks.png");
}

function a33() {
    imagess.setAttribute("src", "set.png");
}


a1.addEventListener("mouseover", a11);
a2.addEventListener("mouseover", a22);
a3.addEventListener("mouseover", a33);


function myselect() {

    var sI = document.getElementById("select1").selectedIndex;
    var sO = document.getElementById("select1").options;
    var sL = document.getElementById("select1").options.length;
    lettre = sO[sI].text + ".png";

    console.log(lettre);
    console.log(sO);
    console.log('${lettre}');imagess.setAttribute("src", lettre);


}
select1.addEventListener("change", myselect);


vMin = 1,
    vMax = 10,
    select = document.getElementById('sMin');
for (i = vMin; i <= vMax; i++) {
    opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    select.appendChild(opt);
}


vMin2 = 11,
    vMax2 = 99,
    select = document.getElementById('sMax');
for (i = vMin2; i <= vMax2; i++) {
    opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    select.appendChild(opt);
}



function zoneText() {
    var miI = document.getElementById("sMin").selectedIndex;
    var miO = document.getElementById("sMin").options;
    var maI = document.getElementById("sMax").selectedIndex;
    var maO = document.getElementById("sMax").options;
    console.log("min" + miO[miI].index);
    console.log("max" + maO[maI].index);

    zone2.value = "";
    for (i = miO[miI].index + 1; i < maO[maI].index + 12; i++) {
        if (i % 10 == 0) {
            zone2.value += "\n";
        }
        zone2.value += i + ", ";
    }


}

go2.addEventListener("click", zoneText);