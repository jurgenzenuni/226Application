<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    include_once '../config/database.php';
    include_once '../class/employees.php';

$ch = curl_init();
//$keyword = isset($_GET['q']) ? $_GET['q'] : die();
$keyword = isset($_GET['query']) ? urlencode($_GET['query']) : die();
$page = isset($_GET['per_page']) ? $_GET['per_page'] : die();

curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_URL, 'https://api.pexels.com/v1/search?query='.$keyword.'&per_page='.$page.'');
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: 563492ad6f91700001000001eb1029727f5f4b82889fef00ad8f8efd',
]);

//curl_setopt($ch, CURLOPT_URL, 'https://wallhaven.cc/api/v1/search?q='.$keyword.'');
//curl_setopt($ch, CURLOPT_POST, 1);
//curl_setopt($ch, CURLOPT_POSTFIELDS, POST DATA);
$result = curl_exec($ch);


print_r($result);
curl_close($ch);
//
//    $database = new Database();
//    $db = $database->getConnection();
//
//    $items = new Employee($db);
//
//    $stmt = $items->getEmployees();
//    $itemCount = $stmt->rowCount();
//
//
//    echo json_encode($itemCount);
//
//    if($itemCount > 0){
//
//        $employeeArr = array();
//        $employeeArr["body"] = array();
//        $employeeArr["itemCount"] = $itemCount;
//
//        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
//            extract($row);
//            $e = array(
//                "id" => $id,
//                "name" => $name,
//                "email" => $email,
//                "age" => $age,
//                "designation" => $designation,
//                "created" => $created
//            );
//
//            array_push($employeeArr["body"], $e);
//        }
//        echo json_encode($employeeArr);
//    }
//
//
//    else{
//        http_response_code(404);
//        echo json_encode(
//            array("message" => "No record found.")
//        );
//    }
?>