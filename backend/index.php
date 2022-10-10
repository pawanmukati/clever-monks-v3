<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require_once './controller.php';
dbConnection();
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$indexPath= $_SERVER['PHP_SELF'];
$indexPath= str_replace('index.php','',$indexPath);
$path = str_replace($indexPath, '',$uri);
$data = json_decode(file_get_contents("php://input"));
switch($path){
    case 'hh' :
        insertData($data);
        sendemail($data);
        break;
    case 'hc' :
        echo "lunhjb"; 
        break;
}
// $dd->path33=  $indexPath;
// echo json_encode($dd);
// $uri = explode( '/', $uri );
 
// if ((isset($uri[2]) && $uri[2] != 'user') || !isset($uri[3])) {
//     header("HTTP/1.1 404 Not Found");
//     exit();
// }
 
// require PROJECT_ROOT_PATH . "/Controller/Api/UserController.php";
 
// $objFeedController = new UserController();
// $strMethodName = $uri[3] . 'Action';
// $objFeedController->{$strMethodName}();
?>