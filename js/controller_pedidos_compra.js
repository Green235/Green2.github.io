// Array para almacenar las compras
let indexListaCompras;
let compra = [];

fetch("js/compras.json")
        .then(response => response.json())
        .then(jsondata => {
            compra = jsondata;
            console.log(compra);
            loadTablaCompra();
        })
        .catch(error => console.error("Error en la carga de datos:", error));

export function addCompra() {
    let nombre_sucursal,
            nombre_empleado,
            fecha,
            hora,
            producto,
            cantidad,
            estatus;

    nombre_sucursal = document.getElementById("txtNombreSucur").value;
    nombre_empleado = document.getElementById("txtNombreEmp").value;
    fecha = document.getElementById("txtFecha").value;
    hora = document.getElementById("txtHora").value;
    producto = document.getElementById("txtProducto").value;
    cantidad = document.getElementById("txtCantidad").value;

    estatus = "Realizada";

    if (nombre_sucursal && nombre_empleado && fecha && hora && producto && cantidad) {
        let compraNueva = {
            nombre_sucursal,
            nombre_empleado,
            fecha,
            hora,
            producto,
            cantidad
        };

        compra.push(compraNueva);
        clean();
        loadTablaCompra();
    } else {
        alert("Por favor, complete todos los campos obligatorios.");
    }
}

export function loadTablaCompra() {
    let cuerpo = "";
    compra.forEach(function (compras) {
        let registro =
                '<tr onclick="moduloPedidos.selectCompra(' + compra.indexOf(compras) + ');">' +
                '<td>' + compras.nombre_sucursal + '</td>' +
                '<td>' + compras.fecha + '</td>' +
                '<td>' + compras.producto + '</td>' +
                '<td>' + compras.cantidad + '</td>' +
                '<td>' + compras.estatus + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblCompra").innerHTML = cuerpo;

}
;

export function selectCompra(index) {
    let selectedCompra = compra[index];
    document.getElementById("txtNombreSucur").value = compra[index].nombre_sucursal;
    document.getElementById("txtNombreEmp").value = compra[index].nombre_empleado;
    document.getElementById("txtFecha").value = compra[index].fecha;
    document.getElementById("txtHora").value = compra[index].hora;
    document.getElementById("txtProducto").value = compra[index].producto;
    document.getElementById("txtCantidad").value = compra[index].cantidad;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexListaCompras = index;
}

export function clean() {
    document.getElementById("txtNombreSucur").value = "";
    document.getElementById("txtNombreEmp").value = "";
    document.getElementById("txtFecha").value = "";
    document.getElementById("txtHora").value = "";
    document.getElementById("txtProducto").value = "";
    document.getElementById("txtCantidad").value = "";

    document.getElementById("txtNombreSucur").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexListaCompras = 0;
}

export function updateCompra() {
    let nombre_sucursal,
            nombre_empleado,
            fecha,
            hora,
            producto,
            cantidad;

    nombre_sucursal = document.getElementById("txtNombreSucur").value;
    nombre_empleado = document.getElementById("txtNombreEmp").value;
    fecha = document.getElementById("txtFecha").value;
    hora = document.getElementById("txtHora").value;
    producto = document.getElementById("txtProducto").value;
    cantidad = document.getElementById("txtCantidad").value;

    if (nombre_sucursal && nombre_empleado && fecha && hora && producto && cantidad) {
        compra[indexListaCompras] = {
            nombre_sucursal,
            nombre_empleado,
            fecha,
            hora,
            producto,
            cantidad,
            estatus: "Activo"
        };

        clean();
        loadTablaCompra();
    } else {
        alert("Por favor, complete todos los campos obligatorios.");
    }
}

export function deleteCompra() {
    // Eliminar la compra según el diseño de tus datos
    // Por ejemplo:
    // compras.splice(indexListaCompras, 1);
    compra[indexListaCompras].estatus = "Cancelada";
    clean();
    loadTablaCompra();
}



    