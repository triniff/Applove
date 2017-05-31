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
 

  			nuevoDiv.innerHTML = c.innerHTML;
  			nuevoDiv.appendChild(cerrar);
  			contenedor.appendChild(nuevoDiv);
 			
 			cerrar.addEventListener("click", function(){
 				nuevoDiv.classList.add("esconder");
 			})

 			window.addEventListener("keydown", function(){ //eliminando elementos tecleando
 				nuevoDiv.classList.add("esconder");
 			})
 			window.addEventListener("mousedown", function(){ //eliminando elementos cuando hacemos click fuera
 				nuevoDiv.classList.add("esconder");
 			})
  		})
  	})
 
  })() 