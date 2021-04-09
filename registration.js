// This function calls all the other functions
function validate() {
    clearErrors();
    if(!validateFirstName()) {
        return false;
    } 
    if(!validateLastName()) {
        return false;
    } 
    if(!unit()) {
        return false;
    }  
    if(!streetNum()) {
        return false;
    } 
    if(!streetName()) {
        return false;
    }  
    if(!city()) {
        return false;
    } 
    if(!postalCode()) {
        return false;
    }  
    if(!phone()) {
        return false;
    }  
    if(!email()) {
        return false;
    } 
    if(!userName()) {
        return false;
    }
    if(!password()) {
        return false;
    }
    if(!secondPass()) {
        return false;
    }
    if(!passLengthValid()) {
        return false;
    } 
    if(!passPatternValid()) {
        return false;
    }
    return true;
}

//This function appends the Error Messages to be displayed
function errorMessage(mess) {
    document.querySelector("#errors").innerHTML += mess;
 }

//This function clears all the Errors
 function clearErrors() {
    document.querySelector("#errors").innerHTML="";
}

//This function validates the First Name in the form
function validateFirstName() {
    var errors = document.querySelector("#errors");
    var first = document.querySelector("#fName");
    var name = first.value.trim();
    var patt = /^[a-z]{1,15}$/ig;
    if(!patt.test(name)) {
         errorMessage("<p>Please enter a valid First Name containing Alphabetic characters</p>");
         return false;
    } else {
        return true;
    }
}

//This function validates the Last Name in the form
function validateLastName() {
    var errors = document.querySelector("#errors");
    var last = document.querySelector("#lName");
    var name = last.value.trim();
    var patt = /^[a-z]{1,15}$/ig;
    if(!patt.test(name)) {
         errorMessage("<p>Please enter a valid Last Name containing Alphabetic characters</p>");
         return false;
    } else {
        return true;
    }
}

//This fuction validates the Unit Number of the address in the form
function unit() {
    var errors = document.querySelector("#errors");
    var unitNum = document.querySelector("#unit");
    var num = unitNum.value.trim();
    var patt = /^[0-9]{1,4}$/g;
    if(!patt.test(num)) {
        errorMessage("<p>Please enter a valid unit number</p>");
        return false; 
    } 
    else {
        return true;
    }
}

//This fuction validates the Street Number of the address in the form
function streetNum() {
    var errors = document.querySelector("#errors");
    var sNum = document.querySelector("#streetNum");
    var num = sNum.value.trim();
    var patt = /^[0-9]{1,4}$/g;
    if(!patt.test(num)) {
        errorMessage("<p>Please enter a valid Street Number of no more then 4 digits</p>");
        return false;
    } 
    else {
        return true;  
    }
}

//This fuction validates the Street Name of the address in the form
function streetName() {
    var errors = document.querySelector("#errors");
    var sName = document.querySelector("#streetName");
    var name = sName.value.trim();
    var patt = /^[a-z]{5,15}$/ig;
    if(!patt.test(name)) {
        errorMessage("<p>Please enter a valid Street Name</p>");
        return false;
    } else {
        return true;
    }
}

//This fuction validates the City of the address in the form
function city() {
    var errors = document.querySelector("#errors");
    var city = document.querySelector("#city");
    var name = city.value.trim();
    var patt = /^[a-z]{5,20}$/ig;
    if(!patt.test(name)) {
        errorMessage("<p>Please enter a valid city</p>");
        return false;
    } else {
        return true;
    }
}

//This fuction validates the Postal Code of the address in the form
//making sure the input is also in the proper format A9A 9A9
function postalCode() {
    var errors = document.querySelector("#errors");
    var pCode = document.querySelector("#postalCode");
    var code = pCode.value.trim();
    var patt = /^[A-Z][0-9][A-Z][0-9][A-Z][0-9]$/ig;
    if(!patt.test(code)) {
        errorMessage("<p>Please enter a valid Canadian postal code</p>");
        return false;
    } else {
        return true;
    }
}

// This function validates the Phone Number of the user in the form
// with the proper format ###-###-####
function phone() {
    var errors = document.querySelector("#errors");
    var num = document.querySelector("#phone");
    var pNum = num.value.trim();
    var patt = /^([0-9]{3}[-]){2}[0-9]{4}$/g;
    if(!patt.test(pNum)) {
        errorMessage("<p>Please enter a valid phone number in the format ###-###-####</p>");
        return false;
    } else {
        return true;
    }
}

//This function validates the Email address the user inputs in the form
//It will validate the proper format
function email() {
    var errors = document.querySelector("#errors");
    var email = document.querySelector("#email");
    var string = email.value.trim();
    var patt = /^[a-z0-9_\-\.]+\@[a-z]+\.[a-z]{2,4}$/i;
    if(!patt.test(string)) {
        errorMessage("<p>Please enter a valid Email address</p>");
        return false;
    } else {
        return true;
    }
}


//This fuction validates the User Name of the user in the form
//with a minimum of 8 character and start with an alphabetic character
function userName() {
    var errors = document.querySelector("#errors");
    var user = document.querySelector("#user");
    var uName = user.value.trim();
    var patt = /^[a-z]{6,16}$/ig;
    if(!patt.test(uName)) {
        errorMessage("<p>Please enter a User Name that starts with a letter</p>");
        return false;
    } else {
        return true;
    }
}

//This fuction validates the Password of the user in the form, make sure
//inputs has at least one digit and one uppercase
function password() {
    var errors = document.querySelector("#errors");
    var password = document.querySelectorAll("#pass");
    var pass = password.value.trim();
    var patt = /^(?=.*[a-z])(?=.*\d){8,16}$/ig;
    if(!patt.test(pass)) {
        return false;
    }
    else {
        return true;
    }
}

//This fuction validates the Password of the user in the form, make sure
//inputs has at least one digit and one uppercase
function secondPass() {
    var errors = document.querySelector("#errors");
    var password = document.querySelector("#secondPass");
    var pass = password.value.trim();
    var patt = /^(?=.*[a-z])(?=.*\d){8,16}$/ig;
    if(!patt.test(pass)) {
        return false;
    } 
    else {
        return true;
    }
}


//This function validate that both the password and the second password match
//If the match they will allow the form to be submitted
function passLengthValid() {
    var errors = document.querySelector("#errors");
    var pass = document.querySelector("#pass").value;
    var password = document.querySelector("#secondPass").value;
    if(!(pass.length == password.length)) {
        errorMessage("<p>Please make sure your passwords match!</p>");
        return false;
    }
        return true;
}

//This function validates the pattern to make sure both passwords are the same
 function passPatternValid() {
    var errors = document.querySelector("#errors");
    var pass = document.querySelector("#pass").value;
    var password = document.querySelector("#secondPass").value;
    if(pass !== password) {
        errorMessage("<p>Please enter a valid Password with 8 to 16 characters one upper case letter and one number!</p>");
        return false;
    }
    return true;
 }
 