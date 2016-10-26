// 


// BOTON
var boton = document.getElementById("agregarDeber");
// EVENTO
boton.onclick = function () 
	{
		textoArea();//cochna funcion me hizo la vida imposible
	};

// TEXTAREA
var texto = document.getElementById("deber");

// LISTA DEBERES
var deberes = document.getElementById("listaDeberes");

// DECIDION DE TEXTO
function textoArea()
	{
		if(texto.value == 0)
			{
				alert("No has escrito nada");
			}
		else 
			{
				var nuevodeber = crearDeber();
			}	
	};	

// AQUI AGREGA A LISTA
function crearDeber() 
	{
		 var nuevo = document.createElement("li");
		 var checa = document.createElement("input");
		 checa.setAttribute("type", "checkbox");//debo fijarme bien en como escribo, una letra frena el programa
		 nuevo.appendChild(checa);
		 deberes.appendChild(nuevo);
		 // CONTENIDO
		 var renglon = document.createElement("label");
		 var contenido = document.createTextNode(texto.value);
		 renglon.appendChild(contenido);
		 nuevo.appendChild(contenido);
		 // BORRAR 
		 var elimina = document.createElement("span");
		 elimina.setAttribute("class","glyphicon glyphicon-trash");
		 nuevo.appendChild(elimina);
		 // ELIMINAR
		 elimina.onclick = function ()
			{
				nuevo.parentNode.removeChild(nuevo);
			}
	 	 // RAYAR
		 checa.onclick = function ()
		 	{
				nuevo.classList.toggle("subrayar");
		 	}	
		 // DEJAR EL TEXTAREA VACIO DESPUES DE AGREGAR DEBER
		 document.getElementById("").value = ""; 	
	};
