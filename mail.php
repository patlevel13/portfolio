<?php
if($_POST) {
    $firstname=$_POST['firstname'];
    $email =$_POST['email'];
    $name = $_POST['name'];
    $message = $_POST['message'];

    $headers = "MIME-Version: 1.0\r\n";
    $headers ="Content-type: text/plain; charset=iso-8859-1\r\n";
    $headers ="Form: $name<$email>\r\nReply-to : $name<$email>\nX-Mailer:PHP";
/* modif email*/
    $subject="$object";
    $destinataire="patleviok@gmail.com";
    $body="$message";
if(mail($destinataire,$subject,$body,$headers)) {
    $response['satus'] ='success';
    $response['msg'] = 'your mail is sent';
    } else {
        $response['satus'] ='error';
        $response['msg'] = 'Something went wrong';
    }
    echo json_encode($response);
}
?>
