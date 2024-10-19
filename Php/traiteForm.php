<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $userName = htmlspecialchars($_POST['name']); 
    $userEmail = htmlspecialchars($_POST['email']);
    $userPhone = htmlspecialchars($_POST['phone']);
    $userMessage = htmlspecialchars($_POST['message']); 

    $to = 'tomdev.paris@gmail.com';
    $subject = 'Portfolio Contact';

    $thankYouMessage = "Hello $userName,\n\n";
    $thankYouMessage .= "Thank you for reaching out to me! I have received your message.\n";
    $thankYouMessage .= "Here are the details you provided:\n";
    $thankYouMessage .= "----------------------------------------\n";
    $thankYouMessage .= "Name: $userName\n";
    $thankYouMessage .= "Email: $userEmail\n";
    $thankYouMessage .= "Phone: $userPhone\n";
    $thankYouMessage .= "Message:\n$userMessage\n";
    $thankYouMessage .= "----------------------------------------\n\n";
    $thankYouMessage .= "I will get back to you as soon as possible.\n";
    $thankYouMessage .= "Thank you, and have a great day!\n\n";
    $thankYouMessage .= "Best regards,\n";
    $thankYouMessage .= "Tom MURPHY";

    $headers = "From: $userEmail\r\n";

    if (mail($to, $subject, $thankYouMessage, $headers)) {
        echo "Your message has been sent successfully!";
    } else {
        echo "There was a problem sending your message.";
    }
}