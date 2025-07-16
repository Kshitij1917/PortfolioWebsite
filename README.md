# 💬 Contact Form Integration with PHP & MySQL

This project includes a fully functional **Contact Form** integrated into a personal portfolio website. The form allows users to submit their name, email, phone number, and message. All submissions are stored securely in a **MySQL database**, making it suitable for backend-connected personal or business portfolios.

---

## 🚀 Features

- Collects contact details via a form (Name, Email, Number, Message)
- Uses PHP for backend processing
- Stores data into a MySQL table (`contact_form`)
- Redirects back to homepage upon successful submission
- Styled with responsive HTML & CSS
- Optional light/dark theme toggle

---

## 🖼️ Contact Form (Frontend)

`index.html` contains the form:

```html
<form action="form.php" method="post">
  <input type="text" name="name" placeholder="Your name" required>
  <input type="email" name="email" placeholder="Your email" required>
  <input type="number" name="number" placeholder="Your phone number" required>
  <textarea name="message" placeholder="Your message" required></textarea>
  <input type="submit" name="send" value="Send Message">
</form>

## 🛠️ PHP Backend Logic
form.php handles the data processing and database storage:

php
Copy
Edit
<?php
$connection = mysqli_connect('localhost', 'root', '', 'contact_db');

if(isset($_POST['send'])){
   $name = $_POST['name'];
   $email = $_POST['email'];
   $number = $_POST['number'];
   $message = $_POST['message'];

   $request = "INSERT INTO contact_form(name, email, number, message) 
               VALUES('$name','$email','$number','$message')";
   mysqli_query($connection, $request);

   header('location:index.html'); 
}
?>

Ensure your database and table are set up in phpMyAdmin:

sql
Copy
Edit
CREATE DATABASE contact_db;

CREATE TABLE contact_form (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  number VARCHAR(20),
  message TEXT
);
## 🔧 Requirements
XAMPP / WAMP / LAMP stack installed

Apache and MySQL services running

Files placed in htdocs (XAMPP) or equivalent root folder

phpMyAdmin access to create the contact_db database

##✅ How It Works
User fills the contact form on the portfolio website

On submission, the form triggers form.php using POST method

PHP stores the submitted data into contact_form table

User is redirected back to the homepage

You can view all messages inside phpMyAdmin

##🔐 Security Tips (For Production Use)
If deploying publicly, replace raw SQL with prepared statements to avoid SQL Injection.

php
Copy
Edit
$stmt = $connection->prepare("INSERT INTO contact_form(name, email, number, message) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $email, $number, $message);
$stmt->execute();


## 👨‍💻 Author
Kshitij Rana – LinkedIn • Portfolio
