<?php
// Recuperar los valores del formulario
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$correo = $_POST['correo'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

// Destinatario del correo electrónico
$destinatario = "sanchez.franco.alum@gmail.com";

// Cuerpo del correo electrónico
$cuerpo = "Nombre: " . $nombre . "\n";
$cuerpo .= "Apellido: " . $apellido . "\n";
$cuerpo .= "Correo electrónico: " . $correo . "\n";
$cuerpo .= "Asunto: " . $asunto . "\n";
$cuerpo .= "Mensaje: " . $mensaje . "\n";

// Enviar el correo electrónico
if(mail($destinatario, $asunto, $cuerpo)){
    echo "El correo electrónico se envió correctamente.";
} else{
    echo "Hubo un error al enviar el correo electrónico. Por favor inténtelo de nuevo más tarde.";
}
?>
