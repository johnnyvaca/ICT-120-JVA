document.addEventListener('DOMContentLoaded', init);

function    init(){
    //   ?txtFirstName=sdf&txtLastName=sdfsd
    recupDonnee = window.location.search;
    positionDebutP = recupDonnee.indexOf("=") + 1;
    positionFinP = recupDonnee.lastIndexOf("&");
    prenom = recupDonnee.substring(positionDebutP, positionFinP);
    positionDebutN = recupDonnee.lastIndexOf("=")+1;
    positionFinN = recupDonnee.length;
    nom = recupDonnee.substring(positionDebutN, positionFinN);
    prenoms.innerHTML = prenom;
    noms.innerHTML = nom;
    texteArea.addEventListener("keyup", txtArea);
    moin.addEventListener("keyup", txtMoin);
    areaCourt.style.visibility = "hidden";
}

function txtArea(){
if(texteArea.value.length < 30 || texteArea.value.length > 144 ){
    areaCourt.style.visibility = "visible";

}else{

    areaCourt.style.visibility = "hidden";
}


}


function txtMoin() {



}






