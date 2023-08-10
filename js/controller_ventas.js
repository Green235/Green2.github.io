let indexListaVentas;
let venta = [];

fetch("js/ventas.json")
        .then(response => response.json())
        .then(jsondata => {
            venta = jsondata;
            console.log(venta);
            loadTablaVentas();
        })
        .catch(error => console.error("Error en la carga de datos:", error));

export function addVenta() {
    let nombre_Cliente,
            nombre_Empleado,
            fecha_Venta,
            hora_Venta,
            producto_Venta,
            cantidad_Venta,
            precio_Unitario;

    nombre_Cliente = document.getElementById("txtNombreCliV").value;
    nombre_Empleado = document.getElementById("txtNombreEmpV").value;
    fecha_Venta = document.getElementById("txtFechaV").value;
    hora_Venta = document.getElementById("txtHoraV").value;
    producto_Venta = document.getElementById("txtProductoV").value;
    cantidad_Venta = document.getElementById("txtCantidadV").value;
    precio_Unitario = document.getElementById("txtPrecioUni").value;

    if (nombre_Cliente && nombre_Empleado && fecha_Venta && hora_Venta && producto_Venta && cantidad_Venta && precio_Unitario) {
        let ventaNueva = {
            nombre_Cliente,
            nombre_Empleado,
            fecha_Venta,
            hora_Venta,
            producto_Venta,
            cantidad_Venta,
            precio_Unitario
        };

        venta.push(ventaNueva);
        clean();
        loadTablaVentas();
    } else {
        alert("Por favor, complete todos los campos obligatorios.");
    }
}

export function loadTablaVentas() {
    let cuerpo = "";
    venta.forEach(function (ventas, index) {
        let registro =
                `<tr data-index="${index}" onclick="moduloVentas.selectVenta(${index});">` +
                `<td>${ventas.nombre_Cliente}</td>` +
                `<td>${ventas.nombre_Empleado}</td>` +
                `<td>${ventas.fecha_Venta}</td>` +
                `<td>${ventas.producto_Venta}</td>` +
                `<td>${ventas.cantidad_Venta}</td></tr>`;
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblVentas").innerHTML = cuerpo;
}

export function selectVenta(index) {
    let selectedVenta = venta[index];
    document.getElementById("txtNombreCliV").value = venta[index].nombre_Cliente;
    document.getElementById("txtNombreEmpV").value = venta[index].nombre_Empleado;
    document.getElementById("txtFechaV").value = venta[index].fecha_Venta;
    document.getElementById("txtHoraV").value = venta[index].hora_Venta;
    document.getElementById("txtProductoV").value = venta[index].producto_Venta;
    document.getElementById("txtCantidadV").value = venta[index].cantidad_Venta;
    document.getElementById("txtPrecioUni").value = venta[index].precio_Unitario;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexListaVentas = index;
}

export function clean() {
    document.getElementById("txtNombreCliV").value = "";
    document.getElementById("txtNombreEmpV").value = "";
    document.getElementById("txtFechaV").value = "";
    document.getElementById("txtHoraV").value = "";
    document.getElementById("txtProductoV").value = "";
    document.getElementById("txtCantidadV").value = "";
    document.getElementById("txtPrecioUni").value = "";

    document.getElementById("txtNombreCliV").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexListaVentas = 0;
}

export function updateVenta() {
    let nombre_Cliente,
            nombre_Empleado,
            fecha_Venta,
            hora_Venta,
            producto_Venta,
            cantidad_Venta,
            precio_Unitario;

    nombre_Cliente = document.getElementById("txtNombreCliV").value;
    nombre_Empleado = document.getElementById("txtNombreEmpV").value;
    fecha_Venta = document.getElementById("txtFechaV").value;
    hora_Venta = document.getElementById("txtHoraV").value;
    producto_Venta = document.getElementById("txtProductoV").value;
    cantidad_Venta = document.getElementById("txtCantidadV").value;
    precio_Unitario = document.getElementById("txtPrecioUni").value;


    if (nombre_Cliente && nombre_Empleado && fecha_Venta && hora_Venta && producto_Venta && cantidad_Venta && precio_Unitario) {
        let ventaNueva = {
            nombre_Cliente,
            nombre_Empleado,
            fecha_Venta,
            hora_Venta,
            producto_Venta,
            cantidad_Venta,
            precio_Unitario
        };

        venta[indexListaVentas] = ventaNueva;
        clean();
        loadTablaVentas();
    } else {
        alert("Por favor, complete todos los campos obligatorios.");
    }
}

export function deleteVenta() {
    // Eliminar la venta según el diseño de tus datos
    // Por ejemplo:
    // venta.splice(indexListaVentas, 1);
    clean();
    loadTablaVentas();
}

