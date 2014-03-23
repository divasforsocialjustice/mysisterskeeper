<?php

    //response array with status code and message
    $response_array = array();

    //send the email
    $body = "Someone just submitted a question for the App\n" . "Name: " . $_POST['sendQuestion_Name'] . "\nE-Mail: " . $_POST['sendQuestion_Email'] . "\nQuestion:\n" . $_POST['sendQuestion_Question'] . "\n";
    mail("mysisterskeeper@murraycox.com, mysisterskeeper2@murraycox.com", "My Sister's Keeper App - New Question", $body);

    //set the response
    $response_array['status'] = 'success';
    $response_array['message'] = 'Email sent!';


    header('Access-Control-Allow-Origin: *');
    echo json_encode($response_array);

?>