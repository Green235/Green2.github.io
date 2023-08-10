 function Login_Central(){
    let user = document.getElementById("txtUser").value;
    let password = document.getElementById("txtPassword").value;
    
    if (user !== "admin") {
        alert("Usuario Incorrecto");
        document.getElementById('txtUser').required="required";
    }else if (password !== "1234"){
        alert("Contraseña Incorrecta");
        document.getElementById('txtPassword').required="required";
    }else{
        window.location.href = 'SICEFA_CENTRAL.html';
    }
    
}
