<?php
header("Content-type:text/html;charset=utf-8;");
require_once("config.php");
//date_default_timezone_set('UTC+8');
$data = empty($_POST['link']);
$result = null;
$err = null;
if(!$data){
	//$t = date("Y-m-d H:i:s",time() );
    $sql = "INSERT INTO `news`
	(`title`,`link`,`origin`,`content`,`theme`)
	VALUES ('".$_POST["title"]."','".$_POST["link"]."','".$_POST["origin"]."','".$_POST["content"]."','".$_POST["theme"]."')";
    $result = $pdo->exec($sql);
    $err = $pdo->errorInfo();
}
if($result){
    $re = array(
        'ret' => 1,
        'msg' => $result
    );
}else{
    $re = array(
        'ret' => 0,
        'msg' => $err
    );
}

echo json_encode($re);
