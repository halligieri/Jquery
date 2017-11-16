/*
*Autor: ellinin
*Fecha: 2017-09-02
*Controlador para realizar las validaciones de los estudiantes
*/

//Variable para almacenar los estudiantes registrados
var listaEstudiantes = null;

//Campos del formulario de registro de estudiantes
var codigo = null;
var nombre = null;
var nota = null;

//Inicializa controlador
function inicializar(){

	listaEstudiantes = [];

	codigo = document.formEstudiante.codigo;
	nombre = document.formEstudiante.nombre;
	nota = document.formEstudiante.nota;

	agregarEventos();
	validarListaEstudiantesVacia();
	
};

//Agrega los eventos a cada una de las acciones del registro
//de estudiantes
function agregarEventos(){

	var btnRegistrarEstudiante = document.getElementById("btnRegistrarEstudiante");
	btnRegistrarEstudiante.addEventListener("click", registrarEstudiante);

	var btnMostrarPromedio = document.getElementById("btnMostrarPromedio");
	btnMostrarPromedio.addEventListener("click", mostrarPromedio);

	var btnMostrarNotaMayor = document.getElementById("btnMostrarNotaMayor");
	btnMostrarNotaMayor.addEventListener("click", mostrarNotaMayor);

	var btnMostrarNotaMenor = document.getElementById("btnMostrarNotaMenor");
	btnMostrarNotaMenor.addEventListener("click", mostrarNotaMenor);

	var txtCodigo = document.getElementById("codigo");
	txtCodigo.addEventListener("keypress", eventTxtEnter);

	var txtNombre = document.getElementById("nombre");
	txtNombre.addEventListener("keypress", eventTxtEnter);

	var txtNota = document.getElementById("nota");
	txtNota.addEventListener("keypress", eventTxtEnter);

};

function eventTxtEnter(e) {
    if (e.keyCode == 13) {
        registrarEstudiante();
        return false;
    }
}

//Valida que la lista no este vacia
function validarListaEstudiantesVacia(){
	
	if(listaEstudiantes == null || listaEstudiantes.length == 0 ){
		
		var divListadoEstudiante = document.getElementById("divListadoEstudiantes");
		
		var etiquetaListaVacia = document.createElement("p");
		var node = document.createTextNode("Lista de estudiantes vacío");
		etiquetaListaVacia.appendChild(node);

		divListadoEstudiante.appendChild(etiquetaListaVacia);

	}

};

//Agrega al estudiante en la lista
function registrarEstudiante(){
	
	if(validarCampos()){
		//var estudiantes = [];
		var estudiante = {};

		estudiante.codigo = codigo.value;
		estudiante.nombre = nombre.value;
		estudiante.nota = nota.value;
		
		//Agrega al nuevo estudiante
		listaEstudiantes.push(estudiante);
		//listaEstudiantes = estudiantes;
		console.log(listaEstudiantes);

		mostrarEstudiantesRegistrados(listaEstudiantes);

	}else{
		alert('Por favor, ingrese los casilleros de color amarillo o corrija la información ingresada');
	}

};

//Despliega la lista de estudiantes registrados
function mostrarEstudiantesRegistrados(listaEstudiantes){
	var html = '';
    html+= '<table>';
    html+= '<tr>';
    html+= '<th>Código</th>';
    html+= '<th>Nombre</th>';
    html+= '<th>Nota</th>';
    html+= '</tr>';
    for(var estudiante in listaEstudiantes) {
        html+= '<tr>';
        html+= '<td>' + listaEstudiantes[estudiante].codigo + '</td>';
        html+= '<td>' + listaEstudiantes[estudiante].nombre + '</td>';
        html+= '<td>' + listaEstudiantes[estudiante].nota + '</td>';
        html+= '</tr>';
    }
    html+= '</table>';
    
    document.getElementById("divListadoEstudiantes").innerHTML =html;
}

//Calcula el promedio de la lista de estudiantes
function mostrarPromedio(){

	if(listaEstudiantes.length != 0){

		var promedioEstudiantes = 0;
        for(var estudiante in listaEstudiantes) {
            promedioEstudiantes += parseInt(listaEstudiantes[estudiante].nota);
        }

        promedioEstudiantes = promedioEstudiantes/listaEstudiantes.length;

        alert('El promedio del total de los estudiantes es: ' + String(promedioEstudiantes));

    }else{

		alert('Por favor, registre al menos un estudiante');

	}

};

//Calcula la nota mayor de la lista de estudiantes
function mostrarNotaMayor(){

	if(listaEstudiantes.length != 0){

		var notaMayor = 0;
		var mensaje = '';
        for(var estudiante in listaEstudiantes) {
            if(listaEstudiantes[estudiante].nota > notaMayor){
                notaMayor = parseInt(listaEstudiantes[estudiante].nota);
            }
        }

        for(var estudiante in listaEstudiantes) {
            if(listaEstudiantes[estudiante].nota == notaMayor ){
                notaMayor = parseInt(listaEstudiantes[estudiante].nota);
                mensaje += 'El estudiante ' + listaEstudiantes[estudiante].nombre + ' tiene la nota mayor de ' + String(listaEstudiantes[estudiante].nota) + '\n'; 
            }
        }

        alert(mensaje);

	}else{

		alert('Por favor, registre al menos un estudiante');

	}

};

//Calcula la nota menor de la lista de estudiantes
function mostrarNotaMenor(){

	if(listaEstudiantes.length != 0){

		var notaMenor = 100;
		var mensaje = '';
        for(var estudiante in listaEstudiantes) {
            if(listaEstudiantes[estudiante].nota < notaMenor){
                notaMenor = parseInt(listaEstudiantes[estudiante].nota);
            }
        }

        for(var estudiante in listaEstudiantes) {
            if(listaEstudiantes[estudiante].nota == notaMenor ){
                notaMenor = parseInt(listaEstudiantes[estudiante].nota);
                mensaje += 'El estudiante ' + listaEstudiantes[estudiante].nombre + ' tiene la nota menor de ' + String(listaEstudiantes[estudiante].nota) + '\n'; 
            }
        }

        alert(mensaje);

    }else{

		alert('Por favor, registre al menos un estudiante');

	}

};

//Validar que los campos esten llenos
function validarCampos(){

	if(codigo.value.trim() == ''){
		codigo.style.background = '#F3F781';
	}else{
		codigo.style.background = '#FFF';
	}
	if(nombre.value.trim() == ''){
		nombre.style.background = '#F3F781';
	}else{
		nombre.style.background = '#FFF';
	}
	if(nota.value.trim() == ''){
		nota.style.background = '#F3F781';
	}else{
		nota.style.background = '#FFF';
	}
	if(!Number.isInteger(parseInt(nota.value.trim()))){
		nota.style.background = '#F3F781';
	}else{
		nota.style.background = '#FFF';
	}
	if(codigo.value.trim() == '' || nombre.value.trim() == '' || nota.value.trim() == '' ||
		!Number.isInteger(parseInt(nota.value.trim()))){
		return false;
	}


	return true;

};