<?php
    $to = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $headers = "From: antoine.mourlot@gmail.com\r\n";

    mail($to, $subject, $message, $headers);
?>