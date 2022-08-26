function validarPasswd() {

    var p1 = document.getElementById("password").value;
    var p2 = document.getElementById("password2").value;
    var espacios = false;
    var cont = 0;

    // Este bucle recorre la cadena para comprobar
    // que no todo son espacios
    while (!espacios && (cont < p1.length)) {
        if (p1.charAt(cont) == " ")
            espacios = true;
        cont++;
    }

    if (espacios) {
        alert("La contraseña no puede contener espacios en blanco");
        return false;
    }

    if (p1.length == 0 || p2.length == 0) {
        alert("Los campos de la password no pueden quedar vacios");
        return false;
    }

    if (p1 != p2) {
        alert("Las passwords deben de coincidir");
        return false;
    } else {
        alert("Todo esta correcto");
        return true;
    }
}

function validateName() {
    var expRegName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var productName = document.getElementById("first_name");
    if (!expRegName.exec(productName.value)) {
        alert("Se recibe solo letras");
        document.getElementById("first_name").value = "";

    }
}
function validateLastName() {
    var expRegLastName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var lastName = document.getElementById("second_name");
    if (!expRegLastName.exec(lastName.value)) {
        alert("Se recibe solo letras");
        document.getElementById("second_name").value = "";

    }
}
function validateAddres() {
    var expRegMessage = /^[A-Za-z0-9\s]+$/;
    var message = document.getElementById("message");
    if (!expRegMessage.exec(message.value)) {
        alert("Se recibe solo letras y números");
        document.getElementById("message").value = ""; // limpia el campo en caso no se ingrese letras o números

    }
}


function validateNumber() {
    var expRegLastName = /^[09][0-9]{1,9}$/;
    var number = document.getElementById("cellphone");
    if (!expRegLastName.exec(number.value)) {
        alert("Se recibe solo numeros");
        document.getElementById("cellphone").value = "";

    }
}
function validateUser() {
    var expRegMessage = /^[A-Za-z0-9\s]+$/;
    var message = document.getElementById("usuario");
    if (!expRegMessage.exec(message.value)) {
        alert("Se recibe solo letras y números");
        document.getElementById("usuario").value = "";

    }
}
function validateLogin() {
    var expRegMessage = /^[A-Za-z0-9\s]+$/;
    var message = document.getElementById("user");
    if (!expRegMessage.exec(message.value)) {
        alert("Se recibe solo letras y números");
        document.getElementById("user").value = "";

    }
}
function validateLoginPasswd() {

    var p1 = document.getElementById("password").value;
    var espacios = false;
    var cont = 0;

    // Este bucle recorre la cadena para comprobar
    // que no todo son espacios
    while (!espacios && (cont < p1.length)) {
        if (p1.charAt(cont) == " ")
            espacios = true;
        cont++;
    }

    if (espacios) {
        alert("La contraseña no puede contener espacios en blanco");
        return false;
    }

    if (p1.length == 0) {
        alert("Los campos de la password no pueden quedar vacios");
        return false;
    }

}