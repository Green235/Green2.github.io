function LoginCentroMax(){
    let user = document.getElementById("txtUserMax").value;
    let password = document.getElementById("txtPasswordMax").value;
    
    if (user !== "admin") {
        alert("Usuario Incorrecto");
        document.getElementById('txtUserMax').required="required";
    }else if (password !== "1234"){
        alert("Contraseña Incorrecta");
        document.getElementById('txtPasswordMax').required="required";
    }else{
        window.location.href = 'Sucursal_Centro_MAX.html';
    }
    
}