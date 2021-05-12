function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let libros = xmlDoc.querySelectorAll("libro")
	let tabla = document.querySelector(".tabla");
	for(let i=0; i<libros.length; i++)
		tabla.innerHTML += "<div class = 'fila'>" +  "<div class='columna'> + libros[i].querySelector("ISBN").textContent + "</div>"
		+  "<div class='columna'> + libros[i].querySelector("titulo").textContent + "</div>"
		+  "<div class='columna'> + libros[i].querySelector("ISBN").textContent + "</div>"
		+  "<div class='columna'> + libros[i].querySelector("nivelProfundidad").textContent + "</div>"
		+  "<div class='columna'> + libros[i].querySelector("autores").textContent + "</div>"
		+  "<div class='columna'> + libros[i].querySelector("editorial").textContent + "</div>"
		+  "<div class='columna'> + libros[i].querySelector("fechaPublicacion").textContent + "</div>"
		+  "<div class='columna'> + libros[i].querySelector("paginaWeb").textContent + "</div>"
		+  "<div class='columna'> + libros[i].querySelector("precio").textContent + "</div>" "</div>"
		// capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + libros[i].textContent + "</p>"
	

	
}

/* let capa = document.querySelector("div:nth-child(1)") 
capa.addEventListener("click",CargarFichero);
function CargarFichero()
{
	loadDocA("libros.xml","xml");
} */

loadDocA("libros.xml","xml");
