document.addEventListener('DOMContentLoaded', init);

function    init(){



 //   frmInscriptions =  document.getElementById("frmInscription");
//alert(frmInscription.children[2]);
    frmInscription.children[2].style.visibility = "hidden";
    frmInscription.children[5].style.visibility = "hidden";
    frmInscription.children[8].style.visibility = "hidden";
    frmInscription.children[11].style.visibility = "hidden";

    frmInscription.children[1].addEventListener("change",fnPrenom);
    frmInscription.children[4].addEventListener("change",fnNom);
    frmInscription.children[7].addEventListener("change",fnMotDePasse);
    frmInscription.children[10].addEventListener("change",fnConfirmMotDePasse);





}

function fnPrenom(){
    if(frmInscription.children[1].value.length < 2){

        frmInscription.children[2].style.visibility = "visible";
    }else{

        frmInscription.children[2].style.visibility = "hidden";
    }


}
function fnNom(){

    if(frmInscription.children[4].value.length < 2){

        frmInscription.children[5].style.visibility = "visible";
    }else{

        frmInscription.children[5].style.visibility = "hidden";
    }
}
function fnMotDePasse(){

    if(frmInscription.children[7].value.length < 6){

        frmInscription.children[8].style.visibility = "visible";
    }else{

        frmInscription.children[8].style.visibility = "hidden";
    }
}
function fnConfirmMotDePasse(){
   if(frmInscription.children[7].value != frmInscription.children[10].value){

        frmInscription.children[11].style.visibility = "visible";
    }
   else
   {
       frmInscription.children[11].style.visibility = "hidden";
   }

}












