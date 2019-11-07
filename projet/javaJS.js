document.addEventListener('DOMContentLoaded', init)
function init(){

	 rows = document.getElementById('lVoyageurs').rows;
	console.log(rows);
	 datas = document.getElementById('lVoyageurs').rows[0].cells.length
//	console.log(datas);

	 Url = url();
	 if(Url === "voyageurs.html"){
		 addP.addEventListener('click',enregistrer);
		 selectV.style.visibility = "hidden";
	 }else{


	 }
	var rowss = document.getElementById('lVoyageurs');
	console.log(rowss);

}

function  url() {
	vUrls = location.pathname;
	position = vUrls.lastIndexOf("/")+1;
	extraction = vUrls.substring(position,vUrls.length)
	console.log(extraction);

return extraction;
}


i = 0;
	function enregistrer() {

        var parent = document.getElementById('lVoyageurs');
        var lignes = document.getElementById('lVoyageurs').rows;
        var Ldonne = document.getElementById('lVoyageurs').rows[0].cells.length;

        console.log(rows);
        for (i = 0; i < Ldonne; i++)
        {
            var Ldonnee = document.getElementById('lVoyageurs').rows[i].cells.length;
            var input = document.createElement('input');
            input.setAttribute("placeholder", "nom");
            parent.appendChild(input);
        }

}


