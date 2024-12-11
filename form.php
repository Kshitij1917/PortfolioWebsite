<?php
// Define MySQL database connection variables
$servername = "localhost"; 
$username = "root";
$password = "";
$database = "contact_db"; 

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $message = $_POST['message'];

    // Prepare SQL query to insert data into the table
    $sql = "INSERT INTO contact_form (name, email, number, message) VALUES ('$name', '$email', '$number', '$message')";

    // Execute the query
    if ($conn->query($sql) === TRUE) {
        echo "Message sent successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close MySQL connection
$conn->close();
?>
