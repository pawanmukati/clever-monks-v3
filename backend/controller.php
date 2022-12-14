<?php
$conn;
function dbConnection()
{   $db_host = 'localhost';
    $db_name = 'contact_form_rest_api';
    $db_username = 'root';
    $db_password = '';
    try {
        $GLOBALS['conn'] = new PDO('mysql:host=' . $db_host . ';dbname=' . $db_name, $db_username, $db_password);
        $GLOBALS['conn']->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $GLOBALS['conn'];
    } catch (PDOException $e) {
        echo "Connection error " . $e->getMessage();
        exit;
    }
} 

function insertData($data){
    if (!isset($data->firstName) || !isset($data->lastName) || !isset($data->email)) :
 
        echo json_encode([
            'success' => 0,
            'message' => 'Please enter compulsory fileds |  First Name, Last Name and Email',
        ]);
        exit;
     
    elseif (empty(trim($data->firstName)) || empty(trim($data->lastName)) || empty(trim($data->email))) :
     
        echo json_encode([
            'success' => 0,
            'message' => 'Field cannot be empty. Please fill all the fields.',
        ]);
        exit;
     
    endif;
     
    try {
     
        $firstName = htmlspecialchars(trim($data->firstName));
        $lastName = htmlspecialchars(trim($data->lastName));
        $email = htmlspecialchars(trim($data->email));
        $number = htmlspecialchars(trim($data->number));
        $company = htmlspecialchars(trim($data->company));
        $message = htmlspecialchars(trim($data->message));
     
        $query = "INSERT INTO `user`(
        firstName,
        lastName,
        email,
        company
        ) 
        VALUES(
        :firstName,
        :lastName,
        :email,
        :company
        )";
     
        $stmt = $GLOBALS['conn']->prepare($query);
     
        $stmt->bindValue(':firstName', $firstName, PDO::PARAM_STR);
        $stmt->bindValue(':lastName', $lastName, PDO::PARAM_STR);
        $stmt->bindValue(':email', $email, PDO::PARAM_STR);
        // $stmt->bindValue(':number', $number, PDO::PARAM_STR);
        $stmt->bindValue(':company', $company, PDO::PARAM_STR);
        // $stmt->bindValue(':message', $message, PDO::PARAM_STR);
        
    
        if ($stmt->execute()) {
     
            http_response_code(201);
            echo json_encode([
                'success' => 1,
                'message' => 'Data Inserted Successfully.'
            ]);
            exit;
        }
        
        echo json_encode([
            'success' => 0,
            'message' => 'There is some problem in data inserting'
        ]);
        exit;
     
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode([
            'success' => 0,
            'message' => $e->getMessage(),
            'errro'=> $e
        ]);
    }
}

function sendemail($data)
    {
        $message = '<p>Hi, <br />Some one has submitted contact form.</p>';
        $message .= '<p><strong>Name: </strong>'.$data['firstName'].$data['lastName'].'</p>';
        $message .= '<p><strong>Email: </strong>'.$data['email'].'</p>';
        $message .= '<p><strong>Phone: </strong>'.$data['number'].'</p>';
        $message .= '<p><strong>Company: </strong>'.$data['company'].'</p>';
        $message .= '<p><strong>Message: </strong>'.$data['message'].'</p>';
        $message .= '<br />Thanks';

        
        // $this->load->library('email');

        $config['protocol'] = 'sendmail';
        $config['mailpath'] = '/usr/sbin/sendmail';
        $config['charset'] = 'iso-8859-1';
        $config['wordwrap'] = TRUE;
        $config['mailtype'] = 'html';

        // $email;
        

        // $this->email->initialize($config);

        // $this->email->from('pawan.mukati@newtechfusion.com', 'NTF@pawan12345');
        // $this->email->to('pawan.mukati@newtechfusion.com');

        // $this->email->subject('Contact Form');
        // $this->email->message($message);

        // $this->email->send();
    }
?>