var formularioQR = document.getElementById("formularioQR");
var imagengenerador = document.getElementById("imagenqr");

formularioQR.addEventListener('submit', function(event) {
    event.preventDefault();
    var nombre = document.getElementById("inputnombre").value;
    var apellidos = document.getElementById("inputapellidos").value;
    var telefono = document.getElementById("inputtelefono").value;
    var datos = "Nombre: " + nombre + ", Apellidos: " + apellidos + ", Numero De Telefono: " + telefono;
    var url = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + encodeURIComponent(datos);
    imagengenerador.src = url;
    alert("Código QR generado");
});