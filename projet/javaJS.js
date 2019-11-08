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

function etatDelete(event) {
    deleteP.disabled = true;
    addP.disabled = false;
   // val = ajouter();

    longeurTd = document.getElementById('lVoyageurs').rows[0].cells.length;
    oTR = document.getElementById('lVoyageurs').rows;
    longeurTr = document.getElementById('lVoyageurs').rows.length;
    dernierTr = longeurTr - 1;
    dernierTd = longeurTd;
    selectionDelete = document.getElementById('lVoyageurs').rows[dernierTr].cells[5];

    for (i = 1; i < longeurTr + 1; i++) {
    oTD = oTR[i].getElementsByTagName('td');
    console.log("longeur : " + longeurTr);


        oTD[5].style.visibility = "visible";
        oBTN = oTD[5].getElementsByTagName('button');
        oBTN = event.target;
        oBTN.innerText = "-";
        oBTN.value = "-";
        oBTN.addEventListener("click", killLine(oBTN[0],i));


    }
}
    function killLine(event,i) // Le paramètre event représente l'événement qui a causé l'appel à la fonction
    {
        addP.disabled = false;
        deleteP.disabled = true;


        selectionDelete = document.getElementById('lVoyageurs').rows[i].cells[5].children[0];

        selectionDelete = event.target // La cible ('target') de l'événement est le bouton (un élément du DOM)
        btn = selectionDelete.parentNode // td est la cellule dans laquelle le bouton se trouve
        td = btn.parentNode // tr est la ligne ('row') dans laquelle la cellule se trouve
        tr = td.parentNode
        tbody = tr.parentNode // table est la table dans laquelle la ligne se trouve
        tbody.removeChild(tr) // On enlève la ligne de la table
    }


    function ajouter() {

        addP.disabled = true;
        deleteP.disabled = false;
    //    longeurTd = document.getElementById('lVoyageurs').rows[0].cells.length;

        longeurTr = document.getElementById('lVoyageurs').rows.length;
        dernierTr = longeurTr - 1;
        dernierTd = document.getElementById('lVoyageurs').rows[0].cells.length;
        selectionDelete = document.getElementById('lVoyageurs').rows[dernierTr].cells[dernierTd];

        if (longeurTr !== 1) {
            selectionDelete.style.visibility = "hidden";
        }


//    console.log(longeurTr + " espace    tdLentg" + dernierTd);
        newtr = document.createElement('tr')

        for (i = 0; i < 5 + 1; i++) {
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
                newBouton.value = "+"
                newBouton.innerText = "+"
                newBouton.addEventListener("click", ajouter)
                //      console.log("bouton\n")
                newtd.appendChild(newBouton);


            }


        }
        newtr.appendChild(newtd);
        lVoyageurs.appendChild(newtr);


        //  return document.getElementById('lVoyageurs')
    }
