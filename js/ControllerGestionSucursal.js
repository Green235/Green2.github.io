
let indexSucursalSeleccionado;
let sucursales = [];

fetch("js/GestionSucursal.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {
            sucursales = jsondata;
            console.log(sucursales);
            loadTabla();
        }
        );

export function addSucursal() {
    let nombre_sucursal,
            titular,
            rfc,
            domicilio,
            colonia,
            ciudad,
            estado,
            codigo_postal,
            telefono_fijo,
            longitud,
            latitud,
            estatus;

    nombre_sucursal = document.getElementById("txtNombreSuc").value;
    titular = document.getElementById("txtTitular").value;
    rfc = document.getElementById("txtRFC").value;
    domicilio = document.getElementById("txtDomicilio").value;
    colonia = document.getElementById("txtColonia").value;
    ciudad = document.getElementById("txtCiudad").value;
    estado = document.getElementById("txtEstado").value;
    codigo_postal = document.getElementById("txtCódigoPostal").value;
    telefono_fijo = document.getElementById("txtMovil").value;
    longitud = document.getElementById("txtLongitud").value;
    latitud = document.getElementById("txtLatitud").value;
    estatus = document.getElementById("txtEstatus").value;

    let sucursales = {};
    sucursales.nombre_sucursal = nombre_sucursal;
    sucursales.titular = titular;
    sucursales.rfc = rfc;
    sucursales.domicilio = domicilio;
    sucursales.colonia = colonia;
    sucursales.ciudad = ciudad;
    sucursales.estado = estado;
    sucursales.codigo_postal = codigo_postal;
    sucursales.telefono_fijo = telefono_fijo;
    sucursales.longitud = longitud;
    sucursales.latitud = latitud;
    sucursales.estatus = "Activo";
    sucursales.push(sucursales);
    clean();
    loadTabla();
}

export function loadTabla() {
    let cuerpo = "";
    sucursales.forEach(function (sucursales) {
        let registro =
                '<tr onclick="moduloSucursal.selectSucursal(' + sucursales.indexOf(sucursales) + ');">' +
                '<td>' + sucursales.nombre_sucursal + '</td>' +
                '<td>' + sucursales.titular + '</td>' +
                '<td>' + sucursales.rfc + '</td>' +
                '<td>' + sucursales.domicilio + '</td>' +
                '<td>' + sucursales.colonia + '</td>' +
                '<td>' + sucursales.ciudad + '</td>' +
                '<td>' + sucursales.estado + '</td>' +
                '<td>' + sucursales.codigo_postal + '</td>' +
                '<td>' + sucursales.telefono_fijo + '</td>' +
                '<td>' + sucursales.longitud + '</td>' +
                '<td>' + sucursales.latitud + '</td>' +
                '<td>' + sucursales.estatus + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tbSucursal").innerHTML = cuerpo;

}

export function selectSucursal(index) {
    document.getElementById("txtNombreSuc").value = sucursales[index].nombre_sucursal;
    document.getElementById("txtTitular").value = sucursales[index].titular;
    document.getElementById("txtRFC").value = sucursales[index].rfc;
    document.getElementById("txtDomicilio").value = sucursales[index].domicilio;
    document.getElementById("txtColonia").value = sucursales[index].colonia;
    document.getElementById("txtCiudad").value = sucursales[index].ciudad;
    document.getElementById("txtEstado").value = sucursales[index].estado;
    document.getElementById("txtCódigoPostal").value = sucursales[index].codigo_postal;
    document.getElementById("txtMovil").value = sucursales[index].telefono_fijo;
    document.getElementById("txtLongitud").value = sucursales[index].longitud;
    document.getElementById("txtLatitud").value = sucursales[index].latitud;
    document.getElementById("txtEstatus").value = sucursales[index].estatus;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexSucursalSeleccionado = index;
}

export function clean() {
    document.getElementById("txtNombreSuc").value = "";
    document.getElementById("txtTitular").value = "";
    document.getElementById("txtRFC").value = "";
    document.getElementById("txtDomicilio").value = "";
    document.getElementById("txtColonia").value = "";
    document.getElementById("txtCiudad").value = "";
    document.getElementById("txtEstado").value = "";
    document.getElementById("txtCódigoPostal").value = "";
    document.getElementById("txtMovil").value = "";
    document.getElementById("txtLongitud").value = "";
    document.getElementById("txtLatitud").value = "";
    document.getElementById("txtEstatus").value = "";

    document.getElementById("txtNombreSuc").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexSucursalSeleccionado = 0;
}

export function updateSucursal() {
    let nombre_sucursal,
            titular,
            rfc,
            domicilio,
            colonia,
            ciudad,
            estado,
            codigo_postal,
            telefono_fijo,
            longitud,
            latitud,
            estatus;

    nombre_sucursal = document.getElementById("txtNombreSuc").value;
    titular = document.getElementById("txtTitular").value;
    rfc = document.getElementById("txtRFC").value;
    domicilio = document.getElementById("txtDomicilio").value;
    colonia = document.getElementById("txtColonia").value;
    ciudad = document.getElementById("txtCiudad").value;
    estado = document.getElementById("txtEstado").value;
    codigo_postal = document.getElementById("txtCódigoPostal").value;
    telefono_fijo = document.getElementById("txtMovil").value;
    longitud = document.getElementById("txtLongitud").value;
    latitud = document.getElementById("txtLatitud").value;
    estatus = document.getElementById("txtEstatus").value;

    let sucursales = {};
    sucursales.nombre_sucursal = nombre_sucursal;
    sucursales.titular = titular;
    sucursales.rfc = rfc;
    sucursales.domicilio = domicilio;
    sucursales.colonia = colonia;
    sucursales.ciudad = ciudad;
    sucursales.estado = estado;
    sucursales.codigo_postal = codigo_postal;
    sucursales.telefono_fijo = telefono_fijo;
    sucursales.longitud = longitud;
    sucursales.latitud = latitud;
    sucursales.estatus = "Activo";
    sucursales.push(sucursales);
    clean();
    loadTabla();
}

export function deleteSucursal() {
    sucursales[indexSucursalSeleccionado].estatus = "Inactivo";
    clean();
    loadTabla();
}

// VALIDACIONES

