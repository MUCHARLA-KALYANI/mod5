function fn(){
    var valid = true;
    var name = document.getElementById('validName').value;
    var mobile = document.getElementById('validNumber').value;
    var email = document.getElementById('validEmail').value;
    var pass = document.getElementById('validPassword').value;

    const usernamePattern = /^[a-zA-Z]+$/;
    if(name == ""){
        valid = false;
        var com = document.getElementById("name");
        com.innerHTML = "* Please enter your name"
    }
    else if(name.length < 8){
        valid = false;
        var com = document.getElementById("name");
        com.innerHTML = "* Name must contain atleast 8 characters"
    }
    else if(!usernamePattern.test(name)){
        valid = false;
        var com = document.getElementById("name");
        com.innerHTML = "* Name must contain alphabets only"
    }
    else{
        document.getElementById('name').innerHTML='';
    }

    const phonePattern = /^\d{10}$/;
    if(mobile == ""){
        valid = false;
        var com = document.getElementById("mobile");
        com.innerHTML = "* Please enter your mobile number"
    }
    else if(mobile.length < 10 || mobile.length > 10){
        valid = false;
        var com = document.getElementById("mobile");
        com.innerHTML = "* Please enter 10 digit number"
    }
    else if(!phonePattern.test(mobile)){
        valid = false;
        var com = document.getElementById("mobile");
        com.innerHTML = "* Mobile number should have digits only"
    }
    else{
        document.getElementById('mobile').innerHTML='';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email == ""){
        valid = false;
        var com = document.getElementById("email");
        com.innerHTML = "* Please enter your e-mail"
    }
    else if(!emailPattern.test(email)){
        valid = false;
        var com = document.getElementById("email");
        com.innerHTML = "* Please enter a valid email address"
    }
    else{
        document.getElementById('email').innerHTML='';
    }
    
    const passpattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(pass == ""){
        valid = false;
        var com = document.getElementById("pass");
        com.innerHTML = "* Please enter your password here"
    }
    else if(pass.length < 8){
        valid = false;
        var com = document.getElementById("pass");
        com.innerHTML = "* Password must contain atleast 8 characters"
    }
    else if(!passpattern.test(pass))
    {
        valid = false;
        var com = document.getElementById("pass");
        com.innerHTML="* password must contain nalphabets numerics and special characters"
    }
    else{
        document.getElementById('pass').innerHTML='';
    }

    if (valid) {
        alert("Successfully Submitted!"); 
        return true; 
    }
    return valid;
}