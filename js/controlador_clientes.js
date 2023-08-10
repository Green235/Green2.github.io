let indexClienteSeleccionado;
let clientes = [];

fetch("js/data_Clientes.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {
            clientes = jsondata;
            console.log(clientes);
            loadTabla();
        }
        );

export function addCliente() {
    let numero_unico_cliente,
            nombre,
            apellido_paterno,
            apellido_materno,
            genero,
            rfc,
            telefono,
            telefono_movil,
            correo_electronico;

    numero_unico_cliente = document.getElementById("txtNumUnico").value;
    nombre = document.getElementById("txtNombre").value;
    apellido_paterno = document.getElementById("txtApePaterno").value;
    apellido_materno = document.getElementById("txtApeMaterno").value;
    telefono = document.getElementById("txtTelefono").value;
    telefono_movil = document.getElementById("txtMovil").value;
    correo_electronico = document.getElementById("txtCorreo").value;
    rfc = document.getElementById("txtRfc").value;

    genero = document.getElementById("txtGenero").value;
    ;

    let cliente = {};
    cliente.numero_unico_cliente = "RF01";
    cliente.nombre = nombre;
    cliente.apellido_paterno = apellido_paterno;
    cliente.apellido_materno = apellido_materno;
    cliente.telefono = telefono;
    cliente.telefono_movil = telefono_movil;
    cliente.correo_electronico = correo_electronico;
    cliente.rfc = rfc;
    cliente.genero = genero;
    cliente.estatus = "Activo";
    clientes.push(cliente);
    clean();
    loadTabla();
}

export function loadTabla() {
    let cuerpo = "";
    clientes.forEach(function (cliente) {
        let registro =
                '<tr onclick="moduloClientes.selectCliente(' + clientes.indexOf(cliente) + ');">' +
                '<td>' + cliente.nombre + '</td>' +
                '<td>' + cliente.apellido_paterno + ' ' + cliente.apellido_materno + '</td>' +
                '<td>' + cliente.genero + '</td>' +
                '<td>' + cliente.telefono_movil + '</td>' +
                '<td>' + cliente.estatus + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblClientes").innerHTML = cuerpo;

}
;

export function selectCliente(index) {
    document.getElementById("txtNumUnico").value = clientes[index].numero_unico_cliente;
    document.getElementById("txtNombre").value = clientes[index].nombre;
    document.getElementById("txtApePaterno").value = clientes[index].apellido_paterno;
    document.getElementById("txtApeMaterno").value = clientes[index].apellido_materno;
    document.getElementById("txtTelefono").value = clientes[index].telefono;
    document.getElementById("txtMovil").value = clientes[index].telefono_movil;
    document.getElementById("txtCorreo").value = clientes[index].correo_electronico;
    document.getElementById("txtRfc").value = clientes[index].rfc;
    document.getElementById("txtGenero").value = clientes[index].genero;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexClienteSeleccionado = index;
}

export function clean() {
    document.getElementById("txtNumUnico").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApePaterno").value = "";
    document.getElementById("txtApeMaterno").value = "";
    document.getElementById("txtTelefono").value = "";
    document.getElementById("txtMovil").value = "";
    document.getElementById("txtCorreo").value = "";
    document.getElementById("txtRfc").value = "";

    document.getElementById("txtNombre").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexClienteSeleccionado = 0;
}

export function updateCliente() {
    let numero_unico_cliente,
            nombre,
            apellido_paterno,
            apellido_materno,
            genero,
            rfc,
            telefono,
            telefono_movil,
            correo_electronico;

    numero_unico_cliente = document.getElementById("txtNumUnico").value;
    nombre = document.getElementById("txtNombre").value;
    apellido_paterno = document.getElementById("txtApePaterno").value;
    apellido_materno = document.getElementById("txtApeMaterno").value;
    telefono = document.getElementById("txtTelefono").value;
    telefono_movil = document.getElementById("txtMovil").value;
    correo_electronico = document.getElementById("txtCorreo").value;
    rfc = document.getElementById("txtRfc").value;

    genero = document.getElementById("txtGenero").value;

    let cliente = {};
    cliente.numero_unico_cliente = numero_unico_cliente;
    cliente.nombre = nombre;
    cliente.apellido_paterno = apellido_paterno;
    cliente.apellido_materno = apellido_materno;
    cliente.telefono = telefono;
    cliente.telefono_movil = telefono_movil;
    cliente.correo_electronico = correo_electronico;
    cliente.rfc = rfc;
    cliente.genero = genero;
    cliente.estatus = "Activo";
    clientes[indexClienteSeleccionado] = cliente;
    clean();
    loadTabla();
}

export function deleteCliente() {
    clientes[indexClienteSeleccionado].estatus = "Inactivo";
    clean();
    loadTabla();
}

//////////////////////////////////////////////////////////////
export function buscarCliente() {
    // Filtrar los clientes en función del valor de búsqueda
    let filtro = document.getElementById("txtBusquedaCliente").value.toLowerCase();
    let resultados = clientes.filter(element => {
        return element.nombre.toLowerCase() === filtro;
    });

    // Construir la tabla con los resultados
    let cuerpo = "";
    resultados.forEach(function (cliente, index) { // Cambio el nombre de la variable para evitar confusiones
        let registro =
                '<tr onclick="moduloClientes.selectCliente(' + index + ');">' +
                '<td>' + cliente.nombre + '</td>' +
                '<td>' + cliente.apellido_paterno + ' ' + cliente.apellido_materno + '</td>' +
                '<td>' + cliente.genero + '</td>' +
                '<td>' + cliente.rfc + '</td>' +
                '<td>' + cliente.estatus + '</td></tr>';
        cuerpo += registro;
    });

    // Actualizar la tabla en el HTML
    document.getElementById("tblClientes").innerHTML = cuerpo;
}


// VALIDACIONES
//Validar el CP.
function validarCP() {
    //Eliminamos la clase error asignada al elemento CP.
    document.getElementById("txtRFC").className = "";
    let valor = document.getElementById("txtRFC").value;
    let patron = /^\d{5}$/;
    if (patron.test(document.getElementById("txtRFC").value) && (!isNaN(valor))) {
        document.getElementById("txtRFC").className = "correcto";
        return true;
    } else {
        //Situamos el foco en el campo txtRFC y le asignamos la clase error.
        alert("El código debe tener al menos 5 digitos.\n");
        document.getElementById("txtRFC").focus();
        document.getElementById("txtRFC").className = "error";
        return false;
    }
}

let formulario = document.getElementById('formulario');
let inputs = document.querySelectorAll('#formulario input');

let expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
};

let validarFormulario = (e) => {
    switch (e.target.nombre) {
        case "nombre":
            if (expresiones.usuario.test(e.target.value)) {

            } else {
                document.getElementById('txtNombre').classList.add('formulario__grupo-incorrecto');
            }
            break;
        case "apellidoPa":

            break;
        case "apellidoMa":

            break;
        case "RFC":

            break;
        case "telFijo":

            break;
        case "telMovil":

            break;
        case "correo":

            break;
    }
};

inputs.forEach((input) => {
    input.addEventListener('blur', validarFormulario);
    input.addEventListener('keyup', validarFormulario);
});