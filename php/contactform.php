<?php
$name = $_POST["name"];
$email = $_POST["email"];
$org = $_POST["org"];
$msg = $_POST["msg"];
 
$EmailTo = "bawolski.marcin@gmail.com";
$Subject = "Nowa wiadomość dotycząca pracy";
// $SubjectConfirmation = "Wiadomość została wsyłana"
 
// prepare email body text
$Body .= "Imię i nazwisko: ";
$Body .= $name;
$Body .= "\n";
 
$Body .= "Adres e-mail: ";
$Body .= $email;
$Body .= "\n";
 
$Body .= "Organizacja: ";
$Body .= $org;
$Body .= "\n";

$Body .= "Wiadomość: ";
$Body .= $msg;
$Body .= "\n";

// $BodyConfirmation .= "Niniejszy e-mail jest potwierdzeniem otrzymania wiadomości. Skontaktuję się z Państwem najszybciej jak to tylko możliwe";
// $BodyConfirmation .= "\n";
// $BodyConfirmation .= "Z wyrazami szacunku";
// $BodyConfirmation .= "\n";
// $BodyConfirmation .= "Marcin Bawolski";
 
// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);
// $success = mail($email, $SubjectConfirmation, $BodyConfirmation, "From:".$email);
 
// redirect to success page
if ($success){
   echo "success";
}else{
    echo "invalid";
}

?>
