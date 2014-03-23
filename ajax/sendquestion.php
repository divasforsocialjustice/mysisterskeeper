<?php

//response array with status code and message
$response_array = array();

/*//check the name field
if(empty($_POST['name'])){

    //set the response
    $response_array['status'] = 'error';
    $response_array['message'] = 'Name is blank';

//check the email field
} elseif(!checkEmail($_POST['email'])) {

    //set the response
    $response_array['status'] = 'error';
    $response_array['message'] = 'Email is blank or invalid';

//check the message field
} elseif(empty($_POST['message'])) {

    //set the response
    $response_array['status'] = 'error';
    $response_array['message'] = 'Message is blank';


//form validated. send email
} else {
*/
    //send the email
    $body = $_POST['name'] . " sent you a message\n";
    $body .= "Details:\n\n" . $_POST['message'];
    mail("mysisterskeeper@murraycox.com", "My Sister's Keeper App - New Question", $body);

    //set the response
    $response_array['status'] = 'success';
    $response_array['message'] = 'Email sent!';

/*}*/

php header('Access-Control-Allow-Origin: *');
echo json_encode($response_array);

?>