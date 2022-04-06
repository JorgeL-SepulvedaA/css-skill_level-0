var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

var user = "userunknowntesting@gmail.com";
var password = "ITLA1234";
var host = "smtp.gmail.com";

var emailTo = document.getElementById("exampleInputEmail").value;
var passwordTo = document.getElementById("exampleInputPassword").value;
    
var myImage = document.getElementById("exampleFormControlFile").value;
    
var manualOpinion = document.getElementById("inlineRadio").value;
var optionSelected = manualOpinion == "option1" ? "Muy bueno." : manualOpinion == "option2" ? "Bueno." : manualOpinion == "option3" ? "Muy malo." : manualOpinion == "option4" ? "Malo." : "Ninguna opcion."
    
var noticeMe = document.getElementById("texto").value;
var updates = noticeMe == "Checked" ? "Avisarme de actualizaciones" : "No avisarme de actualizaciones";

var body = "Saludos, " + emailTo + 
    "\n\n" +
    "Hemos recibido sus respuestas del formulario llenado, cuyos datos en cuestión son: " +
    "\n" +
    "Correo: \n" +
    "   " + emailTo + "\n"+
    "Contraseña: \n" +
    "   " + password + "\n"+
    "Imagen de presentación: \n" +
    "   [Adjunto más abajo]\n"+
    "El manual le ha parecido: \n" +
    "   " + optionSelected + "\n"+
    "Recibir notificación de: \n" +
    "   " + updates + "\n\n\n"+
    "Eso es todo lo recibido, es cuanto \n\n 'Jorge Sepúlveda'.";

function sendEmail() {
    try {
        Email.send({
        Host: host,
        Username : user,
        Password : password,
        To : emailTo,
        From : user,
        Subject : "Form's response",
        Body : body,
        Attachments : [
        {
            name : "Desde(" + emailTo + ").png",
            path: myImage
        }]
    }).then(
        message => alert("Correo enviado correctamente."),
        document.body.innerHTML = '<button id="button3" type="button" class="btn btn-secondary aesthetic-simple" onclick="goHome()" >Volver</button>'
    );
    } catch (error) {
        alert(ErrorEvent.name)
    }
}