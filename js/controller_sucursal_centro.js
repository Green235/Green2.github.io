function LoginPlazaCentro(){
    let user = document.getElementById("txtUserCentral").value;
    let password = document.getElementById("txtPasswordCentral").value;
    
    if (user !== "admin") {
        alert("Usuario Incorrecto");
        document.getElementById('txtUserCentral').required="required";
    }else if (password !== "1234"){
        alert("Contraseña Incorrecta");
        document.getElementById('txtPasswordCentral').required="required";
    }else{
        window.location.href = 'Sucursal_Centro.html';
    }
    
}