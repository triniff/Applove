/*
 * Archivo principal de funcionalidad de JS
 */
 (function galeria(){
 	var contenedor = document.getElementById("work");
 	var caja = Array.from(document.getElementsByClassName("col-4"));
 	var nuevoDiv, imagen, cerrar;
 	caja.forEach(function(c){
 		c.addEventListener("click", function(){
 			nuevoDiv = document.createElement("div");
 			nuevoDiv.classList.add("galeria");

 			cerrar = document.createElement("i");
 			cerrar.classList.add("fa", "fa-times-circle-o");

 			nuevoDiv.appendChild(cerrar);
 			nuevoDiv.innerHTML = c.innerHTML;
 			contenedor.appendChild(nuevoDiv);

 		})
 	})

 })()