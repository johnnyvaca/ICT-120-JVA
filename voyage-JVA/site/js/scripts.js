//auteur : JOhnny Vaca
// Date : 10.11.2019
// Description : Gestion du transport voyage d'études

document.addEventListener('DOMContentLoaded', init);

//Fonction Booststrapp complexe pour valider que tous les champs sont remplis
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

//Fonction d'initialisation
function init() {

    document.getElementById('cacher').style.display = 'none';
    cmdAjouter.addEventListener('click', fnAjouterVoyageur)


    cmdAjouterTransport.addEventListener('click', fnAjouterTransports)
    cmdAjouterDestination.addEventListener('click', fnAjouterDestination)
    fini.addEventListener("click", finir);
    edit.addEventListener("click", editer);
}
//cache le mode editer du transport
function finir(event) {
    document.getElementById('cacher').style.display = 'none';


}
//montre toutes les fonctions d'edition
function  editer() {
    document.getElementById('cacher').style.display = 'block';
}
//Permet j'ajouter un utilisateur dans le tableau
function fnAjouterVoyageur() {
// Controle si un transport a deja été ajouté
    if (document.getElementById('tbody1').rows[0].cells[0].value !== "") {

        // chaque inputX contient les valeurs de chaque valeurs des champs text des voyageurs
        input0 = document.getElementById('ajoutVoyageurs').children[0].children[1].value;
        input1 = document.getElementById('ajoutVoyageurs').children[1].children[1].value;
        input2 = document.getElementById('ajoutVoyageurs').children[2].children[1].value;
        input3 = document.getElementById('ajoutVoyageurs').children[3].children[1].value;
        input4 = document.getElementById('ajoutVoyageurs').children[4].children[1].value;


        //controlle si tous les champs text contiennent un carachtere
        if (input0 !== "" && input1 !== "" && input2 !== "" && input3 !== "" && input4 !== "") {

            // création de tous les elements
            td0 = document.createElement('td');
            td1 = document.createElement('td');
            td2 = document.createElement('td');
            td3 = document.createElement('td');
            td4 = document.createElement('td');
            tr = document.createElement('tr');
            bouton0 = document.createElement('button');
            chkConfirmer = document.createElement('input');

            // Ajout de toutes les attributs de chaque td
            td0.innerText = input0;
            td1.innerText = input1;
            td2.innerText = input2;
            td3.innerText = input3;
            td4.innerText = input4;
            chkConfirmer.type = "checkbox";
            bouton0.innerText = "supprimer";
            bouton0.className = "btn btn-danger";
            bouton0.addEventListener('click', fnSupprimerVoyageur);

            // mettre les elements créés dans les l'élément parent du DOM
            tr.appendChild(td0);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4)
            tr.appendChild(bouton0);
            tr.appendChild(chkConfirmer);
            tbody1.appendChild(tr);
            // Vidange des champs text des voyageurs => libere pour nouveaux
            document.getElementById('ajoutVoyageurs').children[0].children[1].value = "";
            document.getElementById('ajoutVoyageurs').children[1].children[1].value = "";
            document.getElementById('ajoutVoyageurs').children[2].children[1].value = "";
            document.getElementById('ajoutVoyageurs').children[3].children[1].value = "";
            document.getElementById('ajoutVoyageurs').children[4].children[1].value = "";


        }

    }
}
//Supprimer une ligne
function fnSupprimerVoyageur(event)
{

    button0 = event.target; // cible un evenement en particulier à un element du DOM : "boutton0"
    tr = button0.parentNode; //detache le bouton de sa ligne => detache des parents
    tbody = tr.parentNode; // detache le la ligne de le corp de la table
    tbody.removeChild(tr); // supression de la ligne  se trouvant dans le tbody

}

function fnAjouterDestination() {

    depart = document.getElementById('debutVoyage').value;
    arrive = document.getElementById('DestinationFinal').value;

    // si les champs depart ou destination final ne sont pas vide...
    if (depart !== "" || arrive !== "") {
        opt0 = document.createElement('option'); // Creation de l'option  : allée
        opt1 = document.createElement('option');// Creation de l'option  : retour
        opt0.innerText = depart + " - " + arrive; //
        opt1.innerText = arrive + " - " + depart;
        slctVoyages.appendChild(opt0);
        slctVoyages.appendChild(opt1);

        document.getElementById('debutVoyage').value = "";
        document.getElementById('DestinationFinal').value = "";
    }

}

//ajouterTous les transports
function fnAjouterTransports() {

    input0 = document.getElementById('ajoutTransports').children[0].children[1].value;
    input1 = document.getElementById('ajoutTransports').children[1].children[1].value;
    input2 = document.getElementById('ajoutTransports').children[2].children[1].value;
    input3 = document.getElementById('ajoutTransports').children[3].children[1].value;
    input4 = document.getElementById('ajoutTransports').children[4].children[1].value;
    input5 = document.getElementById('ajoutTransports').children[5].children[1].value;

    if (input0 !== "" && input1 !== "" && input2 !== "" && input3 !== "" && input4 !== "" && input5 !== "") {


        td0 = document.createElement('td');
        td1 = document.createElement('td');
        td2 = document.createElement('td');
        td3 = document.createElement('td');
        td4 = document.createElement('td');
        td5 = document.createElement('td');
        tr = document.createElement('tr');
        bouton0 = document.createElement('button');


        td0.innerText = input0;
        td1.innerText = input1;
        td2.innerText = input2;
        td3.innerText = input3;
        td4.innerText = input4;
        td5.innerText = input5;
        bouton0.innerText = "supprimer";
        bouton0.className = "btn btn-danger";
        bouton0.addEventListener('click', fnSupprimerVoyageur);


        tr.appendChild(td0);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(bouton0);
        tbody1.appendChild(tr);

        document.getElementById('ajoutTransports').children[0].children[1].value = "";
        document.getElementById('ajoutTransports').children[1].children[1].value = "";
        document.getElementById('ajoutTransports').children[2].children[1].value = "";
        document.getElementById('ajoutTransports').children[3].children[1].value = "";
        document.getElementById('ajoutTransports').children[4].children[1].value = "";
        document.getElementById('ajoutTransports').children[5].children[1].value = "";


    }


}

