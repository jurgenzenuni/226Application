<html>
<head>
    <title>PHP Test</title>
</head>
<body>
<?php
//echo '<p>Hello World homework 2</p>';
$txt = "Hello world!";
$x = 5;
$y = 10.5;
//define is constant
define("TIMEOUT", 300);
define("HTTP_GET_REQUEST_TYPE" , "getRequest");
//log.info(HTTP_GET_REQUEST_TYPE + "request");
print  ("jurgen" . TIMEOUT);
//echo $txt;
//echo'</br>';
//echo $x;
mytest($x);
function mytest($scopetest)
{
  $cars = array("Volvo", "BMW", "Toyota");
  echo count($cars);

}
   // $marks =40;
    //print ($marks >= 40) ? "pass" : "fail";//better than if else
    // if($marks >= 40){
    //     print "pass";
    // }
    // else {
    //     print "fail";
   //  }
    //$t = date("H");
   // if ($t < "20") {
     //   echo "Have a good day!";
   // } else "Have a bad day";

?>
</body>
</html>