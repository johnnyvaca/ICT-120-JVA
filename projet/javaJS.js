document.addEventListener('DOMContentLoaded', init)

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
        addP.addEventListener('click', ajouter);
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

function etatDelete() {
    deleteP.disabled = true;
    addP.disabled = false;
    val = ajouter();
    // line = lVoyageurs.rows[0].cells[5].children;
   // alert(line);
    line2 = lVoyageurs.children[0].children[0].children[0].innerText;
  //  donnees = line.children;
    console.log("line : " + val.rows);
    console.log("");
    for (i = 0; i < 4; i++) {
/*
        lVoyageurs.children[i].children[5].children[i].style.visibility = "visible";
        lVoyageurs.children[i].children[5].children[i].value = "hello";
        lVoyageurs.children[i].children[5].children[i].innerHTML = "hello";
        lVoyageurs.children[i].children[5].children[i].innertext = "hello";
*/
        console.log("longeur : "+ line2 +"\n");





    }



}




function killLine(event) // Le paramètre event représente l'événement qui a causé l'appel à la fonction
{
    cmdMoin = event.target // La cible ('target') de l'événement est le bouton (un élément du DOM)
    td = cmdMoin.parentNode // td est la cellule dans laquelle le bouton se trouve
    tr = td.parentNode // tr est la ligne ('row') dans laquelle la cellule se trouve
    tbody = tr.parentNode // table est la table dans laquelle la ligne se trouve
    tbody.removeChild(tr) // On enlève la ligne de la table
}



function ajouter() {

    addP.disabled = true;
    deleteP.disabled = false;
    longeurTd = document.getElementById('lVoyageurs').rows[0].cells.length;

    longeurTr = document.getElementById('lVoyageurs').rows.length;
    dernierTr = longeurTr - 1;
    dernierTd = longeurTd;
    selectionDelete = document.getElementById('lVoyageurs').rows[dernierTr].cells[dernierTd];

    if (longeurTr !== 1) {
        selectionDelete.style.visibility = "hidden";
    }


//    console.log(longeurTr + " espace    tdLentg" + dernierTd);
    newtr = document.createElement('tr')

    for (i = 0; i < longeurTd + 1; i++) {
        if (i === 3) {
            newtd = document.createElement('td');
            newSelect = document.createElement('select');
            newOption = document.createElement('option');
            newOption.value = "hello"
            newOption.innerText = "Type pièce d'identité"
            newSelect.appendChild(newOption)
            newtd.appendChild(newSelect)
            newtr.appendChild(newtd);
        } else if (i < longeurTd) {
            newtd = document.createElement('td');
            newInput = document.createElement('input');
            newInput.type = "text";
            newtd.appendChild(newInput);

            console.log("input\n")

            newtr.appendChild(newtd);
        }


        if (i === longeurTd) {
            newtd = document.createElement('td');
            newBouton = document.createElement('button');
            newBouton.value = "+"
            newBouton.innerText = "+"
            newBouton.addEventListener("click", ajouter)
      //      console.log("bouton\n")
            newtd.appendChild(newBouton);


        }



    }
    newtr.appendChild(newtd);
    lVoyageurs.appendChild(newtr)


    return document.getElementById('lVoyageurs')
}