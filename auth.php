<?php
session_start();
include 'config.php'; 

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['action'])) {
        switch ($_POST['action']) {
            case 'signup':
                signup($conn);
                break;
            case 'login':
                login($conn);
                break;
            case 'logout':
                logout();
                break;
        }
    }
}

function signup($conn) {
    $username = trim($_POST['username']);
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);
    $confirmPassword = trim($_POST['confirm_password']);

    if ($password != $confirmPassword) {
        echo "Passwords do not match!";
        return;
    }

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $checkUser = $conn->prepare("SELECT * FROM users WHERE email = ? OR username = ?");
    $checkUser->bind_param("ss", $email, $username);
    $checkUser->execute();
    $result = $checkUser->get_result();

    if ($result->num_rows > 0) {
        echo "Email or Username already exists!";
    } else {
        $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $username, $email, $hashedPassword);
        if ($stmt->execute()) {
            $_SESSION['username'] = $username;
            echo "Registration successful! You are now logged in.";
        } else {
            echo "Error during registration.";
        }
    }
}

function login($conn) {
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();

        if (password_verify($password, $user['password'])) {
            $_SESSION['username'] = $user['username'];
            echo "Login successful!";
        } else {
            echo "Invalid username or password!";
        }
    } else {
        echo "Invalid username or password!";
    }
}

function logout() {
    session_destroy(); 
    echo "You have been logged out!";
}

?>




