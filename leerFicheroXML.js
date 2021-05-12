function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let libros = xmlDoc.querySelectorAll("libro")
	let tabla = document.querySelector("tabla");
	for(let i=0; i<libros.length; i++)
		tabla.innerHTML = "<div class = "fila"> +  libros[i].textContent + "</div>"
		// capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + libros[i].textContent + "</p>"
	
}

/* let capa = document.querySelector("div:nth-child(1)") 
capa.addEventListener("click",CargarFichero);
function CargarFichero()
{
	loadDocA("libros.xml","xml");
} */

loadDocA("libros.xml","xml");
