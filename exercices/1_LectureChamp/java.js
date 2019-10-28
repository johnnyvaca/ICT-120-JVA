function alerts(event)
{
    event.preventDefault();
   // if(txt.value === "")
  //  alert("Vous n'avez pas remplis la zone de texte");
    txt2.value = txt.value;
    txt.value = "";


}

gos.addEventListener("click",alerts);
retour = alerts();


