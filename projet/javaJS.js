document.addEventListener('DOMContentLoaded', init)
function init(){

	 rows = document.getElementById('lVoyageurs').rows;
	console.log(rows);
	 datas = document.getElementById('lVoyageurs').rows[0].cells.length
	console.log(datas);

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




	var rows = document.getElementById('lVoyageurs').rows[0].cells.length;
	console.log(rows);

	for (var k = i; k < i+1; k++) {

		for (var p = 0; p < rows; p++){
			var input = document.createElement('input');
			input.setAttribute("placeholder", "nom");

		}



	}


	/*
	var newL = document.createElement("tr");
	newL.value= "hello";
	newL.innerText = "hallo";
	newL.appendChild(vVoyageurs);
*/
	/*
	for (var k = 0; k < 1; k++) {

		var row = rows[k];
//		rows[]

	//	cmdPlus.style.visibility = "visibled";
		for (var j = 0; j < 10; j++) {
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
	;*/
}


