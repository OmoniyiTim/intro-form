
 
var form     =  document.getElementById('form');
var submitBtn =  document.getElementById('submit'); 

function validation(){
 
    var firstName =  document.getElementById('firstname');
    var lastName =  document.getElementById('lastname');
    var myInput = document.getElementById("psw");
    var mail     =  document.getElementById('email');
    var error    =  document.querySelector('.error');
   

    if(firstName.value.length < 5){
      error.textContent = 'Enter a Valid Name';
      return false;
    }

    if(lastName.value.length < 5){
        error.textContent = 'Enter a Valid lastName';
        return false;
    }

    if(mail.value.indexOf('@') == -1 || mail.value.length < 5){
      error.textContent = 'Enter a Valid Email';
      return false;
    }

    
    return true;

}


