div11 = document.getElementById("div1")
div12 = document.getElementById("div2")
div13 = document.getElementById("div3")
div14 = document.getElementById("div4")
div15 = document.getElementById("div5")
div16 = document.getElementById("txtNames")
div17 = document.getElementById("txtInitialss")
function div01()
{
    div11.style.backgroundColor = "lightblue";
    div11.style.textDecoration = "line-through";

}
function div02()
{
    div11.style.backgroundColor = "transparent";
    div11.style.textDecoration = "none";
}
function div03()
{
    div13.style.fontFamily = "Arial";

}
function div04()
{
    div13.style.fontFamily = "inherit";

}
function bigywas(){
    if (chbox1.checked === true  && chbox2.checked=== true){


        exo4.innerHTML="YES"; //totalité de l'élément = content
        exo4.classList.add("color");


    }

}
div11.addEventListener("click",div01);
div12.addEventListener("click",div02);
div13.addEventListener("mouseover",div03);
div13.addEventListener("mouseout",div04);
chbox1.addEventListener("click",bigywas);
chbox2.addEventListener("click",bigywas);
balle.addEventListener("click",detruire);

function detruire()
{
    cible.classList.add("block");

}
function initials()
{
alert("hello");
    lettre1 = div16.value.substring(0,1);
    position2 = div16.value.lastIndexOf(" ")+1;

    lettre2 = div16.value.substring(position2,position2+1);
    position3 = div16.value.length - 1;
    lettre3 = div16.value.substring(position3,position3+1);

    div17.value = (lettre1+lettre2+lettre3);
    div16.value = div16.value.toUpperCase();

}

div16.addEventListener("keyup",initials());






//element.classList();
/*
Mesurer     txt.value.lenght

Extraire                txtvame.value.substring(depart,combien);
Rechercher              txtname.value.indexOf(i);
Rechercher  A'lenver :  txtname.value.lastIndexOf(g);
Concatener              consol.log("J'ai"+variable+"ans")
Interpoler */