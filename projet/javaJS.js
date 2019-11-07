document.addEventListener('DOMContentLoaded', init)
function init(){




	 Url = url();
	 if(Url === "voyageurs.html"){
		 addP.addEventListener('click',enregistrer);
		 selectV.style.visibility = "hidden";
	 }else{


	 }


}

function  url() {
	vUrls = location.pathname;
	position = vUrls.lastIndexOf("/")+1;

	extraction = vUrls.substring(position,vUrls.length)
	console.log(extraction);

return extraction;
}



function enregistrer() {

	vVoyageurs = document.getElementById('lVoyageurs');

	var rows = document.getElementById('lVoyageurs').rows;
	for (var k = 0; k < 1; k++) {

		var row = rows[k];

	//	cmdPlus.style.visibility = "visibled";
		for (var j = 0; j < row.cells.length; j++) {
			if (j < row.cells.length ) {




				var input = document.createElement('input');
				input.type = "text";
				if (j === 0)
					input.setAttribute("placeholder", "nom");
				if (j === 1)
					input.setAttribute("placeholder", "prénom");
				if (j === 2)
					input.setAttribute("placeholder", "notes");
				if (j === 3)
					input.setAttribute("placeholder", "sièges");
				if (j === 4)
					input.setAttribute("placeholder", "type d'identité");
				if (j === 5)
					input.setAttribute("placeholder", "numero d'identité");
				if (j === 6 || j === 7)
				{
					var boutons = document.createElement('button');
					if (j % 2 !== 0) {
						boutons.value = "-" + j;
						boutons.innerText = "-" + j;
					} else {
						boutons.value = "+ " + j;
						boutons.innerText = "+" + j;
					}
					row.cells[j].appendChild(boutons);
				}

			}





			row.cells[j].appendChild(input);
		}
		;
	}
	;
}


