let indexProductosSeleccionados;
let Productos = [];

fetch("js/data_Productos.json")
        .then(response => {
            return response.json();
        })
        .then(function (jsondata) {
            Productos = jsondata;
            console.log(Productos);
            loadTabla();
        }
        );

export function addProducto() {
    let nombre_Prod,
            nombre_Gen,
            forma_Farm,
            unidad_Medi,
            presentacion,
            indicacion,
            contraindicacion,
            concentracion,
            unidad_Envase,
            precio_Unitario,
            codigo_Barras,
            estatus;



    nombre_Prod = document.getElementById("txtNombreProd").value;
    nombre_Gen = document.getElementById("txtNombreProdGen").value;
    forma_Farm = document.getElementById("txtFormFarm").value;
    unidad_Medi = document.getElementById("txtUniMed").value;
    presentacion = document.getElementById("txtPresent").value;
    indicacion = document.getElementById("txtIndi").value;
    contraindicacion = document.getElementById("txtContIndi").value;
    concentracion = document.getElementById("txtConcen").value;
    unidad_Envase = document.getElementById("txtUniEnva").value;
    precio_Unitario = document.getElementById("txtPrecioUni").value;
    codigo_Barras = document.getElementById("txtCodBa").value;
    estatus = document.getElementById("txtEstatus").value;
    ;

    let Producto = {};
    Producto.nombre_Prod = nombre_Prod;
    Producto.nombre_Gen = nombre_Gen;
    Producto.forma_Farm = forma_Farm;
    Producto.unidad_Medi = unidad_Medi;
    Producto.presentacion = presentacion;
    Producto.indicacion = indicacion;
    Producto.contraindicacion = contraindicacion;
    Producto.concentracion = concentracion;
    Producto.unidad_Envase = unidad_Envase;
    Producto.precio_Unitario = precio_Unitario;
    Producto.estatus = "Disponible";
    Productos.push(Producto);
    cleanProd();
    loadTabla();
}

export function loadTabla() {
    let cuerpo = "";
    Productos.forEach(function (Producto) {
        let registro =
                '<tr onclick="moduloProductos.selectProducto(' + Productos.indexOf(Producto) + ');">' +
                '<td>' + Producto.nombre_Prod + '</td>' +
                '<td>' + Producto.unidad_Medi + '</td>' +
                '<td>' + Producto.unidad_Envase + '</td>' +
                '<td>' + Producto.precio_Unitario + '</td>' +
                '<td>' + Producto.estatus + '</td></tr>';
        cuerpo += registro;
    });
    console.log(cuerpo);
    document.getElementById("tblProductos").innerHTML = cuerpo;

}
;

export function selectProducto(index) {
    document.getElementById("txtNombreProd").value = Productos[index].nombre_Prod;
    document.getElementById("txtNombreProdGen").value = Productos[index].nombre_Gen;
    document.getElementById("txtFormFarm").value = Productos[index].forma_Farm;
    document.getElementById("txtUniMed").value = Productos[index].unidad_Medi;
    document.getElementById("txtPresent").value = Productos[index].presentacion;
    document.getElementById("txtIndi").value = Productos[index].indicacion;
    document.getElementById("txtContIndi").value = Productos[index].contraindicacion;
    document.getElementById("txtConcen").value = Productos[index].concentracion;
    document.getElementById("txtUniEnva").value = Productos[index].unidad_Envase;
    document.getElementById("txtPrecioUni").value = Productos[index].precio_Unitario;
    document.getElementById("txtCodBa").value = Productos[index].codigo_Barras;
    document.getElementById("txtEstatus").value = Productos[index].estatus;
    document.getElementById("btnUpdate").classList.remove("disabled");
    document.getElementById("btnDelete").classList.remove("disabled");
    document.getElementById("btnAdd").classList.add("disabled");
    indexProductosSeleccionados = index;
}

export function cleanProd() {
    document.getElementById("txtNombreProd").value = "";
    document.getElementById("txtNombreProdGen").value = "";
    document.getElementById("txtFormFarm").value = "";
    document.getElementById("txtUniMed").value = "";
    document.getElementById("txtPresent").value = "";
    document.getElementById("txtIndi").value = "";
    document.getElementById("txtContIndi").value = "";
    document.getElementById("txtConcen").value = "";
    document.getElementById("txtUniEnva").value = "";
    document.getElementById("txtPrecioUni").value = "";
    document.getElementById("txtCodBa").value = "";
    document.getElementById("txtEstatus").value = "";


    document.getElementById("txtNombreProd").focus();
    document.getElementById("btnUpdate").classList.add("disabled");
    document.getElementById("btnDelete").classList.add("disabled");
    document.getElementById("btnAdd").classList.remove("disabled");
    indexProductosSeleccionados = 0;
}

export function updateProducto() {
    let nombre_Prod,
            nombre_Gen,
            forma_Farm,
            unidad_Medi,
            presentacion,
            indicacion,
            contraindicacion,
            concentracion,
            unidad_Envase,
            precio_Unitario,
            codigo_Barras,
            estatus;



    nombre_Prod = document.getElementById("txtNombreProd").value;
    nombre_Gen = document.getElementById("txtNombreProdGen").value;
    forma_Farm = document.getElementById("txtFormFarm").value;
    unidad_Medi = document.getElementById("txtUniMed").value;
    presentacion = document.getElementById("txtPresent").value;
    indicacion = document.getElementById("txtIndi").value;
    contraindicacion = document.getElementById("txtContIndi").value;
    concentracion = document.getElementById("txtConcen").value;
    unidad_Envase = document.getElementById("txtUniEnva").value;
    precio_Unitario = document.getElementById("txtPrecioUni").value;
    codigo_Barras = document.getElementById("txtCodBa").value;
    estatus = document.getElementById("txtEstatus").value;


    let Producto = {};
    Producto.nombre_Prod = nombre_Prod;
    Producto.nombre_Gen = nombre_Gen;
    Producto.forma_Farm = forma_Farm;
    Producto.unidad_Medi = unidad_Medi;
    Producto.presentacion = presentacion;
    Producto.indicacion = indicacion;
    Producto.contraindicacion = contraindicacion;
    Producto.concentracion = concentracion;
    Producto.unidad_Envase = unidad_Envase;
    Producto.precio_Unitario = precio_Unitario;
    Producto.estatus = "Disponible";
    Productos[indexProductosSeleccionados] = Producto;
    cleanProd();
    loadTabla();
}

export function deleteProducto() {
    Productos[indexProductosSeleccionados].estatus = "Agotado";
    cleanProd();
    loadTabla();
}

///////////////////////////////////////////////////////
export function buscarProducto() {
    // Obtener el valor de búsqueda y convertirlo a minúsculas
    let filtro = document.getElementById("txtBusquedaProducto").value.toLowerCase();

    // Filtrar los productos en función del valor de búsqueda
    let resultados = Productos.filter(producto => {
        return producto.nombre_Producto.toLowerCase().includes(filtro);
    });

    // Construir el contenido HTML de la tabla con los resultados
    let cuerpo = resultados.map((producto, index) => {
        return `
            <tr onclick="moduloProductos.selectProducto(${index});">
                <td>${producto.nombre_Producto}</td>
                <td>${producto.unidad_medida}</td>
                <td>${producto.unidad_envase}</td>
                <td>${producto.precio_unitario}</td>
                <td>${producto.estatus}</td>
            </tr>
        `;
    }).join("");

    // Actualizar la tabla en el HTML
    document.getElementById("tblProductos").innerHTML = cuerpo;
}


