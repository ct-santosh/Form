var us=false;
var es=false;
var ps=false;
var rps=false;
function user(){
    const c= document.getElementById("uname");  
    const l=c.value.length;
    if(l===0){
        document.getElementById("uerror").innerHTML="User Name Can't Be empty";
        c.style.borderColor="red";
    }
    else if(l<3 || l>25){
        document.getElementById("uerror").innerHTML="User Name Length Must be between 3 and 25";
        c.style.borderColor="red";
    }
    else{
        c.style.borderColor="green";
        document.getElementById("uerror").innerHTML="";
        us=true;
    }
}
function mail(){
    const d= document.getElementById("email");
    const x =d.value;  
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const z = emailPattern.test(x);
    if(z){
        d.style.borderColor="green";
        document.getElementById("eerror").innerHTML="";
        es=true;
    }
    else{
        d.style.borderColor="red";
        document.getElementById("eerror").innerHTML="Please Enter A Valid Email Address";
    }
    
}

function password(){
    const e= document.getElementById("pwd");
    const y =e.value;  
    function validatePassword(password) {
        var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[! @ # $ % ^ & * ( ) _ - = +]).+$/;
        return passwordPattern.test(password);
      }
      var isValid = validatePassword(y);
      if(y.length>=8){
        if(isValid==true){
            e.style.borderColor="green";
            document.getElementById("perror").innerHTML="";
            ps=true;
          }
          else{
            e.style.borderColor="red";
            document.getElementById("perror").innerHTML="Must contain at least one lowercase character, one uppercase character, one number, and one special character from the set (!@#$%^&*)"
          }
      }
      else if (y.length<8){
        e.style.borderColor="red";
        document.getElementById("perror").innerHTML="Password must contain atleast 8 charecters";
      }
      else {
        e.style.borderColor="red";
        document.getElementById("perror").innerHTML="Password can't be empty";
      }
      
        }
function rpassword(){
    const g= document.getElementById("pwd").value;
    const h= document.getElementById("rpwd");
    const j=h.value;
    if(g===j){
        document.getElementById("rperror").innerHTML="";
        h.style.borderColor="green";
        rps=true;
    }
    else{
        document.getElementById("rperror").innerHTML="Passwords do not match";
        h.style.borderColor="red";
    }
}
function show_password(){
    document.getElementById("pwd").setAttribute("type", "text");
    document.getElementById("togglePassword").setAttribute("class", "fa fa-eye-slash");
}
function hide_password(){
    document.getElementById("pwd").setAttribute("type", "password");
    document.getElementById("togglePassword").setAttribute("class", "fa fa-eye");
}


function doDisplay(){
    if(es && us && ps && rps === true){
        alert("You are Signed up Successfully")
    }
    else{
        alert("Enter your detaisl as per given instructions !!!")
    }
}

    
    
    


