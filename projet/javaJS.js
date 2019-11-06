document.addEventListener('DOMContentLoaded', init)
function init(){

	cmdPlus.addEventListener('click',enregistrer);

}





function enregistrer()
{

	var fso  = CreateObject("Scripting.FileSystemObject");
	var fh = fso.CreateTextFile("C://voyageurs.txt", true);
	fh.WriteLine("hola bb");
	fh.Close();

}





