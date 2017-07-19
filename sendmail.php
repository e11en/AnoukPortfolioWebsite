<?php
header('Access-Control-Allow-Origin: *');

if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $msg = $_POST['message'];

    $content = '<html><body>';
    $content .= '<style> table { font-family: Helvetica, Arial, sans-serif; width: 640px; border-collapse: collapse; border-spacing: 0; } td { border-top: 1px solid #CCC; border-bottom: 1px solid #CCC; height: 30px; text-align: center; }</style>';
    $content .= '<table>';
    $content .= '<tr><td>Naam</td><td>'.$name.'</td></tr>';
    $content .= '<tr><td>Email</td><td>'.$email.'</td></tr>';
    $content .= '<tr><td>Bericht</td><td>'.$msg.'</td></tr>';
    $content .= '</table>';
    $content .= '</body></html>';

    $headers = "From: test@anoukstouten.com\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    mail("test@anoukstouten.com","Nieuw bericht van anoukstouten.com",$content, $headers);
} else {
    echo 'fail';
}
?>