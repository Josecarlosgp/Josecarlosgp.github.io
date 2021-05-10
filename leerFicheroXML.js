function gestionarFicheroXML(xmlDoc){
	alert(xmlDoc);
	
}

let capa = document.querySelector("div:nth-child(1)") 
capa.addEventListener("click",CargarFichero);
function CargarFichero()
{
	loadDocA("libros.xml","xml");
}
