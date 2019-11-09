document.addEventListener('DOMContentLoaded', init)
var test = 0;

function init() {

    addP.disabled = false;
    deleteP.disabled = true;

    ligne1 = document.getElementById('lVoyageurs').rows[0]
    ligne1.style.visibility = "hidden"
    rows = document.getElementById('lVoyageurs').rows;
    console.log(rows);
    datas = document.getElementById('lVoyageurs').rows[0].cells.length
        //	console.log(datas);

    Url = url();
    if (Url === "voyageurs.html") {
        addP.addEventListener('click', etatAdd);
        deleteP.addEventListener('click', etatDelete);
        selectV.style.visibility = "hidden";
    } else {


    }
    var rowss = document.getElementById('lVoyageurs');
    console.log(rowss);

}

function url() {
    vUrls = location.pathname;
    position = vUrls.lastIndexOf("/") + 1;
    extraction = vUrls.substring(position, vUrls.length)
    console.log(extraction);

    return extraction;
}
function test2(){
    oTR = document.getElementById('lVoyageurs').rows;
    for (i = 1; i < longeurTr; i++) {
        oTD = oTR[i].getElementsByTagName('td');

        // console.log("longeur : " + longeurTr);

        bouton = oTD[5].getElementsByTagName('button');

    }
/*
    if( test === 1)
    {
        bouton[0].addEventListener("click", ajouter);
    }
    else if(i === 0){
        bouton[0].addEventListener("click", killLine);
    }
*/
}

function etatAdd(){
    ligne1 = document.getElementById('lVoyageurs').rows[0];
    ligne1.style.visibility = "visible";
    ligne1.cells[5].children[0].addEventListener('click', ajouter) ;
    oTR = document.getElementById('lVoyageurs').rows;


    for (i = 1; i < oTR.length; i++) {


        oTD = oTR[i].getElementsByTagName('td');

        // console.log("longeur : " + longeurTr);

        bouton = oTD[5].getElementsByTagName('button');
  //      bouton[0].style.visibility = "visible";

        //   oBTN[0] = event.target;
        bouton[0].innerText = "+";
        bouton[0].value = "+";
        bouton[0].addEventListener("click", ajouter);
    }
/*
    if (longeurTr > 1 && oTR) {
        selectionDelete.style.visibivisibility = "hidden";
    }
    */
}

function etatDelete() {
deleteP.disabled = true;
addP.disabled = false;
// val = ajouter();
test = 0;
longeurTd = document.getElementById('lVoyageurs').rows[0].cells.length;

longeurTr = document.getElementById('lVoyageurs').rows.length;
dernierTr = longeurTr - 1;
dernierTd = longeurTd;
selectionDelete = document.getElementById('lVoyageurs').rows[dernierTr].cells[5];
oTR = document.getElementById('lVoyageurs').rows;
for (i = 1; i < longeurTr; i++) {

    if(i === 0){
        ligne1.style.visibility = "visible"
    }
    oTD = oTR[i].getElementsByTagName('td');

   // console.log("longeur : " + longeurTr);

    bouton = oTD[5].getElementsByTagName('button');
    bouton[0].style.visibility = "visible";

 //   oBTN[0] = event.target;
    bouton[0].innerText = "-";
    bouton[0].value = "-";
    bouton[0].addEventListener("click", test2);
}
    /*
    if( test === 1)
    {
        bouton[0].addEventListener("click", ajouter);
    }
    else if(i === 0){
        bouton[0].addEventListener("click", killLine);
    }

     */





}

function killLine(event) // Le paramètre event représente l'événement qui a causé l'appel à la fonction
{
    addP.disabled = false;
    deleteP.disabled = true;


  // button = document.getElementById('lVoyageurs').rows[1].cells[5].children[0];

    button = event.target // La cible ('target') de l'événement est le bouton (un élément du DOM)

    td = button.parentNode // td est la cellule dans laquelle le bouton se trouve
    tr = td.parentNode // tr est la ligne ('row') dans laquelle la cellule se trouve

    tbody = tr.parentNode // table est la table dans laquelle la ligne se trouve
  //  sss = tbody.parentNode
    tbody.removeChild(tr) // On enlève la ligne de la table
    return test
}


function ajouter() {

    test = 1;

    addP.disabled = true;
    deleteP.disabled = false;
    longeurTd = document.getElementById('lVoyageurs').rows[0].cells.length;

    longeurTr = document.getElementById('lVoyageurs').rows.length;
    dernierTr = longeurTr - 1;
    dernierTd = document.getElementById('lVoyageurs').rows[0].cells.length;
    selectionDelete = document.getElementById('lVoyageurs').rows[dernierTr].cells[dernierTd];

    if (longeurTr !== 1) {
       selectionDelete.style.visibivisibility = "hidden";
    }


    console.log(longeurTr + " espace    tdLentg" + dernierTd);
    newtr = document.createElement('tr')

    for (i = 1; i < 5 + 1; i++) {

        if (i === 3) {
            newtd = document.createElement('td');
            newSelect = document.createElement('select');
            newOption = document.createElement('option');
            newOption.value = "hello"
            newOption.innerText = "Type pièce d'identité"
            newSelect.appendChild(newOption)
            newtd.appendChild(newSelect)
            newtr.appendChild(newtd);
        } else if (i < 5) {
            newtd = document.createElement('td');
            newInput = document.createElement('input');
            newInput.type = "text";
            newtd.appendChild(newInput);

            console.log("input\n")

            newtr.appendChild(newtd);
        }


        if (i === 5) {
            newtd = document.createElement('td');
            newBouton = document.createElement('button');
            newBouton.value = "+";
            newBouton.innerText = "+";

            //    newBouton.addEventListener("click", test2);

                //      console.log("bouton\n")
            newtd.appendChild(newBouton);


        }


    }
    newtr.appendChild(newtd);
    lVoyageurs.appendChild(newtr);


    oTR = document.getElementById('lVoyageurs').rows;
    for (i = 1; i < oTR.length; i++) {
        oTD = oTR[i].getElementsByTagName('td');

        // console.log("longeur : " + longeurTr);

        bouton = oTD[5].getElementsByTagName('button');

        bouton[0].addEventListener("click", test2);
        console.log("bouton : " + bouton[0].value);
    }






    return document.getElementById('lVoyageurs')
}