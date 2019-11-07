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


function killLine(event) // Le paramètre event représente l'événement qui a causé l'appel à la fonction
{
    cmdMoin = event.target   // La cible ('target') de l'événement est le bouton (un élément du DOM)
    td = button.parentNode  // td est la cellule dans laquelle le bouton se trouve
    tr = td.parentNode      // tr est la ligne ('row') dans laquelle la cellule se trouve
    tbody = tr.parentNode   // table est la table dans laquelle la ligne se trouve
    tbody.removeChild(tr)   // On enlève la ligne de la table
}


	
	function enregistrer() {

		longeurTr = document.getElementById('lVoyageurs').rows[0].cells.length;
		newtr = document.createElement('tr')

			for(i = 0; i < longeurTr+2; i++)
			{
				if(i < longeurTr){
					newtD = document.createElement('td');
					newInput = document.createElement('input');
					newInput.type = "text";
					
					
					newtD.appendChild(newInput);
				newtr.appendChild(newtD);
					
				}else{
					newBouton = document.createElement('button');
					if(i%2 === 0)
					{
						newBouton.addEventListener("click",enregistrer)
					}
					else{
						newBouton.addEventListener("")
					}
						
						
						
						newtr.appendChild(newBouton);
						

				}
				
				


			}
		lVoyageurs.appendChild(newtr)
	

}


