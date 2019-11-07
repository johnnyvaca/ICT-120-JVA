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

	
	function enregistrer() {

		longeurTr = document.getElementById('lVoyageurs').rows[0].cells.length;
		newtr = document.createElement('tr')

			for(i = 0; i < longeurTr; i++)
			{
				newId = document.createElement('td');
				newInput = document.createElement('input');
				newInput.type = "text";
				newId.appendChild(newInput);
				newtr.appendChild(newId);

			}
		lVoyageurs.appendChild(newtr)
	

/*
		var rows = document.getElementById('lVoyageurs').rows;
		
		for (var i = 0; i < 1; i++) { // rows.length
			var row = rows[i];
			for (var j = 0; j < 1 ; j++) { //row.cells.length
				var input = document.createElement('input');
				input.type = "text";
				row.cells[i].appendChild(input); //
			};
		}; 


	*/	
		


		/*
				var parent = document.getElementById('lVoyageurs');
				var lignes = document.getElementById('lVoyageurs').rows;
				var Ldonne = document.getElementById('lVoyageurs').rows[0].cells.length;
				var fils = document.getElementById('lignes');
				//var Ldonnee = document.getElementById('lVoyageurs').rows[i].cells.length;
				console.log(rows);
				for (i = 0; i < Ldonne; i++)
				{
					var input = document.createElement('input');
					input.setAttribute("placeholder", "nom "+i);
					fils.appendChild(input);
				}
				fils.appendChild(input);
		*/
}


