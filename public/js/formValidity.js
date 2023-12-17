function login() {
    console.log("Test")
    let usernameField = document.forms["formAccount"]["username"].value;
    let passwordField = document.forms["formAccount"]["password"].value;
    if(usernameField == "" || passwordField == ""){
        document.getElementById("username").style.border = "1px solid red";
        document.getElementById("password").style.border = "1px solid red";
        return false;
    } else {
        return true;
    }
}