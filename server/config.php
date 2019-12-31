<?php
$dbms="mysql";
$host='localhost';
$dbName='test';
$user='root';
$pass='123456';
$dsn="$dbms:host=$host;dbname=$dbName;charset=utf8";

try{
    $pdo = new PDO($dsn,$user,$pass);
    print_r( "连接成功");
    //foreach ($pdo->query('SELECT * from newscont') as $row){
        //print_r($row); }
}catch (PDOException $e){
    die ("Error!: " . $e->getMessage() . "<br/>");
}
