document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Example of simple validation
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
        // Redirect to another page or do something else upon successful login
    } else {
        alert('Invalid username or password. Please try again.');
        // Clear the input fields or take other actions for unsuccessful login
    }
});
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Example of simple validation
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
        // Redirect to another page or do something else upon successful login
    } else {
        alert('Invalid username or password. Please try again.');
        // Clear the input fields or take other actions for unsuccessful login
    }
});

document.getElementById('forgot-password-link').addEventListener('click', function(event) {
    event.preventDefault();
    // Implement your forgot password logic here
    alert('Redirecting to forgot password page...');
    // Optionally, you can redirect to a separate forgot password page
});
