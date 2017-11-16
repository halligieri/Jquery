$(document).ready(function() {


function listarEstudiante() {
	var tabla ="";

	tabla +='<table border="1">';
	tabla +='<tr>';
	tabla +='<th>Id</th>';
	tabla +='<th>Nombre</th>';
	tabla +='<th>Nota</th>';
	tabla +='<th>Editar</th>';
	tabla +='<th>Eliminar</th>';
	tabla +='</tr>';
	for (var i = 0; i < localStorage.length; i++) {
		var clave = localStorage.Key(i);
			 estudiante = $.parseJSON(localStorage.getItem(clave));


		tabla +='<tr>';
		tabla +='<td>'+estudiante.id+'</td>';
		tabla +='<td>'+estudiante.nombre+'</td>';
		tabla +='<td>'+estudiante.nota+'</td>';
		//tabla +='<td><button onclick="editarEstudiante(\''estudiante.id'\')">Editar</button></td>';
		//tabla +='<td><button onclick="eliminarEstudiante(\''estudiante.id'\')">Eliminar</button></td>';
		tabla +='</tr>';
	}
	tabla +='</table>';
	$("#p1").html(tabla);
}

//---------------------------------------

function editarEstudiante(id) {
	var estudiante;
	for(var i = 0;i<localStorage.length;i++) {

			var clave = localStorage.Key(i);
				if(clave == id) {
					  estudiante = $.parseJSON(localStorage.getItem(clave));
					$("#codigo").val(estudiante.id);
					$("#nombre").val(estudiante.nombre);
					$("#nota").val(estudiante.nota);
				}
		}
}
//--------------------------------------------
 function eliminarEstudiante() {
	 localStorage.removeItem(id);
	 listarEstudiante();
 }
//--------------------------------------------
	function Reestablecer() {
		$("#codigo").val("");
		$("#nombre").val("");
		$("#nota").val("");
	}
//--------------------------------------------



	var contador;
		if(localStorage.length>0) {
			contador = localStorage.length + 1;
		}else{
			contador = 1;
		}

	$("#id").val(contador);
	$("#registro").click(function(){
		var id = $("#id").val();
		var nombre = $("#nombre").val();
		var nota = $("#nota").val();




				listarEstudiante();
				Reestablecer();

			});

		});

		var estudiante = {
			id:id,
			nombre:nombre,
			nota:nota
		};
		localStorageSetItem(id,JSON.stringify(estudiante));
