let indexEmpleadoSeleccionado;
let empleados = [];

fetch("js/data_empleado.json")
    .then(response => {
        return response.json();
    })
    .then(function (jsondata) {
        empleados = jsondata;
        console.log(empleados);
        loadTablaEmp();
    });

export function addEmpleado() {
    let fecha_Nacimiento,
        nombre,
        apellido_paterno,
        apellido_materno,
        codigo_Postal,
        rfc,
        curp,
        telefono,
        domicilio,
        ciudad,
        estado,
        fecha_ingreso,
        puesto,
        salario,
        correo_electronico,
        genero,
        cod_Empleado,
        estatus;

    fecha_Nacimiento = document.getElementById("dateFecha").value;
    nombre = document.getElementById("txtNombre").value;
    apellido_paterno = document.getElementById("txtApePaterno").value;
    apellido_materno = document.getElementById("txtApeMaterno").value;
    telefono = document.getElementById("txtMovil").value;
    codigo_Postal = document.getElementById("txtCodigo").value;
    correo_electronico = document.getElementById("txtCorreo").value;
    rfc = document.getElementById("txtRfc").value;
    curp = document.getElementById("txtCurp").value;
    estado = document.getElementById("estado").value;
    domicilio = document.getElementById("txtDomicilio").value;
    ciudad = document.getElementById("txtCiudad").value;
    fecha_ingreso = document.getElementById("dateFechaIn").value;
    puesto = document.getElementById("txtPuesto").value;
    salario = document.getElementById("txtSalario").value;
    cod_Empleado = document.getElementById("txtCodEmp").value;
    genero = document.getElementById("txtGenero").value;

    estatus = "Activo"; // Asignación faltante

    let empleado = {
        fecha_Nacimiento,
        nombre,
        apellido_paterno,
        apellido_materno,
        telefono,
        codigo_Postal,
        correo_electronico,
        rfc,
        curp,
        estado,
        domicilio,
        ciudad,
        fecha_ingreso,
        puesto,
        salario,
        cod_Empleado,
        genero,
        estatus
    };

    empleados.push(empleado);
    clean();
    loadTablaEmp();
}

export function loadTablaEmp() {
    let cuerpo = "";
    empleados.forEach(function (empleado) {
        let registro =
            '<tr onclick="moduloEmpleados.selectEmpleado(' + empleados.indexOf(empleado) + ');">' +
            '<td>' + empleado.nombre + '</td>' +
            '<td>' + empleado.apellido_paterno + ' ' + empleado.apellido_materno + '</td>' +
            '<td>' + empleado.genero + '</td>' +
            '<td>' + empleado.telefono + '</td>' +
            '<td>' + empleado.estatus + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("loadTablaEmp").innerHTML = cuerpo;
}

export function selectEmpleado(index) {
    let selectedEmpleado = empleados[index];
    document.getElementById("dateFecha").value = selectedEmpleado.fecha_Nacimiento;
    document.getElementById("txtNombre").value = selectedEmpleado.nombre;
    document.getElementById("txtApePaterno").value = selectedEmpleado.apellido_paterno;
    document.getElementById("txtApeMaterno").value = selectedEmpleado.apellido_materno;
    document.getElementById("txtMovil").value = selectedEmpleado.telefono;
    document.getElementById("txtCodigo").value = selectedEmpleado.codigo_Postal;
    document.getElementById("txtCorreo").value = selectedEmpleado.correo_electronico;
    document.getElementById("txtRfc").value = selectedEmpleado.rfc;
    document.getElementById("txtCurp").value = selectedEmpleado.curp;
    document.getElementById("estado").value = selectedEmpleado.estado;
    document.getElementById("txtDomicilio").value = selectedEmpleado.domicilio;
    document.getElementById("txtCiudad").value = selectedEmpleado.ciudad;
    document.getElementById("dateFechaIn").value = selectedEmpleado.fecha_ingreso;
    document.getElementById("txtPuesto").value = selectedEmpleado.puesto;
    document.getElementById("txtCodEmp").value = selectedEmpleado.cod_Empleado;
    document.getElementById("txtSalario").value = selectedEmpleado.salario;
    document.getElementById("txtGenero").value = selectedEmpleado.genero;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexEmpleadoSeleccionado = index;
}

export function clean() {
    document.getElementById("dateFecha").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApePaterno").value = "";
    document.getElementById("txtApeMaterno").value = "";
    document.getElementById("txtMovil").value = "";
    document.getElementById("txtCodigo").value = "";
    document.getElementById("txtCorreo").value = "";
    document.getElementById("txtRfc").value = "";
    document.getElementById("txtCurp").value = "";
    document.getElementById("estado").value = "";
    document.getElementById("txtDomicilio").value = "";
    document.getElementById("txtCiudad").value = "";
    document.getElementById("dateFechaIn").value = "";
    document.getElementById("txtPuesto").value = "";
    document.getElementById("txtCodEmp").value = "";
    document.getElementById("txtSalario").value = "";
    document.getElementById("txtGenero").value = "";

    document.getElementById("txtNombre").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexEmpleadoSeleccionado = 0;
}

export function updateEmpleado() {
    let fecha_Nacimiento,
        nombre,
        apellido_paterno,
        apellido_materno,
        codigo_Postal,
        rfc,
        curp,
        telefono,
        domicilio,
        ciudad,
        estado,
        fecha_ingreso,
        puesto,
        cod_Empleado,
        salario,
        correo_electronico,
        genero;

    fecha_Nacimiento = document.getElementById("dateFecha").value;
    nombre = document.getElementById("txtNombre").value;
    apellido_paterno = document.getElementById("txtApePaterno").value;
    apellido_materno = document.getElementById("txtApeMaterno").value;
    telefono = document.getElementById("txtMovil").value;
    codigo_Postal = document.getElementById("txtCodigo").value;
    correo_electronico = document.getElementById("txtCorreo").value;
    rfc = document.getElementById("txtRfc").value;
    curp = document.getElementById("txtCurp").value;
    estado = document.getElementById("estado").value;
    domicilio = document.getElementById("txtDomicilio").value;
    ciudad = document.getElementById("txtCiudad").value;
    fecha_ingreso = document.getElementById("dateFechaIn").value;
    puesto = document.getElementById("txtPuesto").value;
    salario = document.getElementById("txtSalario").value;
    cod_Empleado = document.getElementById("txtCodEmp").value;
    genero = document.getElementById("txtGenero").value;

    let empleado = {
        fecha_Nacimiento,
        nombre,
        apellido_paterno,
        apellido_materno,
        telefono,
        codigo_Postal,
        correo_electronico,
        rfc,
        curp,
        estado,
        domicilio,
        ciudad,
        fecha_ingreso,
        puesto,
        salario,
        cod_Empleado,
        genero,
        estatus: "Activo"
    };

    empleados[indexEmpleadoSeleccionado] = empleado;
    clean();
    loadTablaEmp();
}

export function deleteEmpleado() {
    empleados[indexEmpleadoSeleccionado].estatus = "Inactivo";
    clean();
    loadTablaEmp();
}

//////////////////////////////////////////////
export function buscarEmpleado() {
    // Filtrar los clientes en función del valor de búsqueda
    let filtro = document.getElementById("txtBusquedaEmpleado").value.toLowerCase();
    let resultados = empleados.filter(element => {
        return element.nombre.toLowerCase() === filtro;
    });

    // Construir la tabla con los resultados
    let cuerpo = "";
    resultados.forEach(function (empleado, index) { // Cambio el nombre de la variable para evitar confusiones
        let registro =
                '<tr onclick="moduloEmpleados.selectEmpleado(' + index + ');">' +
                '<td>' + empleado.nombre + '</td>' +
                '<td>' + empleado.apellido_paterno + ' ' + empleado.apellido_materno + '</td>' +
                '<td>' + empleado.genero + '</td>' +
                '<td>' + empleado.telefono + '</td>' +
                '<td>' + empleado.estatus + '</td></tr>';
        cuerpo += registro;
    });

    // Actualizar la tabla en el HTML
    document.getElementById("loadTablaEmp").innerHTML = cuerpo;
}




