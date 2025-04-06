function login() {
    let email = prompt("Enter your email:");
    let password = prompt("Enter your password:");

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Login Successful!");
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
}

function signup() {
    let email = prompt("Enter your email:");
    let password = prompt("Enter a password:");

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Account Created Successfully!");
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
}
