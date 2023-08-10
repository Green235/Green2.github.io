let moduloClientes;
let moduloEmpleados;
let moduloProductos;
let moduloPedidos;
let moduloVentas;
let moduloSucursal;


function cargarModuloClientes() {
    fetch("Clientes.html")
            .then(
                    function (response) {
                        return response.text();
                    }
            )
            .then(
                    function (html) {
                        document.getElementById("contenedorPrincipal").innerHTML = html;
                        import("./controlador_clientes.js").then(
                                function (controller) {
                                    moduloClientes = controller;
                                }
                        );
                    }
            );
}

function cargarModuloEmpleados() {
    fetch("Empleados.html")
            .then(
                    function (response) {
                        return response.text();
                    }
            )
            .then(
                    function (html) {
                        document.getElementById("contenedorPrincipal").innerHTML = html;
                        import("./controller_empleados.js").then(
                                function (controller) {
                                    moduloEmpleados = controller;
                                }
                        );
                    }
            );
}

function cargarGestionSucursal() {
    fetch("sucursales.html")
            .then(
                    function (response) {
                        return response.text();
                    }
            )
            .then(
                    function (html) {
                        document.getElementById("contenedorSecundario").innerHTML = html;
                        import("./controller_sucursales.js").then(
                                function (controller) {
                                    moduloSucursal = controller;
                                }
                        );
                    }
            );
}

function cargarGestionProductos() {
    fetch("productos.html")
            .then(
                    function (response) {
                        return response.text();
                    }
            )
            .then(
                    function (html) {
                        document.getElementById("contenedorSecundario").innerHTML = html;
                        import("./controller_productos.js").then(
                                function (controller) {
                                    moduloProductos = controller;
                                }
                        );
                    }
            );
}

function cargarGestionPedidosCompra() {
    fetch("compras.html")
            .then(
                    function (response) {
                        return response.text();
                    }
            )
            .then(
                    function (html) {
                        document.getElementById("contenedorPrincipal").innerHTML = html;
                        import("./controller_pedidos_compra.js").then(
                                function (controller) {
                                    moduloPedidos = controller;
                                }
                        );
                    }
            );
}

function cargarGestionVentas() {
    fetch("ventas.html")
            .then(
                    function (response) {
                        return response.text();
                    }
            )
            .then(
                    function (html) {
                        document.getElementById("contenedorPrincipal").innerHTML = html;
                        import("./controller_ventas.js").then(
                                function (controller) {
                                    moduloVentas = controller;
                                }
                        );
                    }
            );
}

function cargarConsultaProductos() {
    fetch("Consulta_producto.html")
            .then(
                    function (response) {
                        return response.text();
                    }
            )
            .then(
                    function (html) {
                        document.getElementById("contenedorPrincipal").innerHTML = html;
                        import("./consulta_producto.js").then(
                                function (controller) {
                                    moduloProductos = controller;
                                }
                        );
                    }
            );
}

function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%";
}