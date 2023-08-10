let productos = [];
let  nombre_Producto,
        nombre_generico,
        forma_farmaceutica,
        unidad_medida,
        presentacion,
        principal_indicación,
        contraindicaciones,
        unidad_envase,
        precio_unitario,
        foto,
        ruta_foto,
        codigio_barras,
        estatus;

fetch('js/consulta_de_productos.json')
        .then(response => response.json())
        .then(data => {
            let tablaBody = document.querySelector('#tablaProductos tbody');

            data.forEach(producto => {
                let row = document.createElement('tr');
                row.innerHTML = `
                <td>${producto.nombre_Producto}</td>
                <td>${producto.nombre_generico}</td>
                <td>${producto.forma_farmaceutica}</td>
                <td>${producto.unidad_medida}</td>
                <td>${producto.presentacion}</td>
                <td>${producto.principal_indicación}</td>
                <td>${producto.contraindicaciones}</td>
                <td>${producto.unidad_envase}</td>
                <td>${producto.precio_unitario}</td>
                <td><img src="${producto.foto}" alt="Foto"></td>
                <td>${producto.ruta_foto}</td>
                <td>${producto.codigio_barras}</td>
                <td>${producto.estatus}</td>
            `;
                tablaBody.appendChild(row);
            });
        });
        
/////////////////////////////////////////
// Define la función para buscar productos
export function buscarProducto() {
    let filtro = document.getElementById("txtStock").value.toLowerCase();
    let resultados = productos.filter(element => {
        return element.nombre_Producto.toLowerCase() === filtro;
    });

    // Construir la tabla con los resultados
    let cuerpo = "";
    resultados.forEach(function (producto, index) {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${producto.nombre_Producto}</td>
            <td>${producto.nombre_generico}</td>
            <td>${producto.forma_farmaceutica}</td>
            <td>${producto.unidad_medida}</td>
            <td>${producto.presentacion}</td>
            <td>${producto.principal_indicación}</td>
            <td>${producto.contraindicaciones}</td>
            <td>${producto.unidad_envase}</td>
            <td>${producto.precio_unitario}</td>
            <td><img src="${producto.foto}" alt="Foto"></td>
            <td>${producto.ruta_foto}</td>
            <td>${producto.codigio_barras}</td>
            <td>${producto.estatus}</td>
        `;
        cuerpo += row;
    });

    // Actualizar la tabla en el HTML
    document.getElementById("tablaProductos").innerHTML = cuerpo;
}
