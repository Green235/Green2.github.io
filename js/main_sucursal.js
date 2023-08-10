function Login_Sucursal() {
    let user = document.getElementById("txtUser").value;
    let password = document.getElementById("txtPassword").value;

    if (user !== "admin") {
        alert("Usuario Incorrecto");
        document.getElementById('txtUser').required = "required";
    } else if (password !== "1234") {
        Swal.fire({
            icon: 'Error',
            title: 'Oops...',
            text: 'Contraseña Incorrecta!',
            footer: '<a href="">Why do I have this issue?</a>'
        });
        document.getElementById('txtPassword').required = "required";
    } else {
        window.location.href = 'SICEFA_SUCURSAL.html';
    }

}

