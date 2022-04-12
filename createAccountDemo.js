var firstName = document.forms['form']['firstName']; /* Variables are obtained from the input names inside the form tag in .html document */
var lastName = document.forms['form']['lastName'];
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];
var passConfirm = document.forms['form']['passConfirm'];
var phone = document.forms['form']['phone'];

var first_blank_error = document.getElementById('first_blank_error'); /* Variables are defined based on id's of .html elements */
var first_num_error = document.getElementById("first_num_error");
var last_blank_error = document.getElementById('last_blank_error');
var last_num_error = document.getElementById('last_num_error');
var email_blank_error = document.getElementById('email_blank_error');
var email_format_error = document.getElementById('email_format_error');
var pass_blank_error = document.getElementById('pass_blank_error');
var pass_num_error = document.getElementById('pass_num_error');
var pass_upper_error = document.getElementById('pass_upper_error');
var pass_lower_error = document.getElementById('pass_lower_error');
var pass_length_error = document.getElementById('pass_length_error');
var passConfirm_blank = document.getElementById('passConfirm_blank');
var passConfirm_error = document.getElementById('passConfirm_error');
var phone_blank_error = document.getElementById('phone_blank_error');
var phone_num_error = document.getElementById('phone_num_error');
var phone_length_error = document.getElementById('phone_length_error');


form.addEventListener('submit', (e) => { /* Evenlistener fires when a user clicks the 'submit' button */

    var validEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; /* Format required to validate correct email input */

    if(firstName.value === '' || firstName.value == null){ /* First Name text field validation */
        first_blank_error.style.display = "block"; /* Error message that displays is text box is left empty */
        e.preventDefault();
    }else if (firstName.value.match(/[0-9]/)){ /* First Name cannot contain letters within the text box */
        first_num_error.style.display = "block";
        e.preventDefault();
    }

    if(lastName.value === '' || lastName.value == null){ /* Last Name text field validation */
        last_blank_error.style.display = "block"; /* Error message that displays is text box is left empty */
        e.preventDefault();
    } else if (lastName.value.match(/[0-9]/)){ /* Last Name cannot contain letters within the text box */
        last_num_error.style.display = "block"
        e.preventDefault();
    }

    if(email.value === '' || email.value == null){ /* Email text field validation */
        email_blank_error.style.display = "block";
        e.preventDefault();
    }else if (email.value.match(validEmail)){ /* Email must match the format in variable 'valid email' */
        e.preventDefault();
    }else{
        email_format_error.style.display = "block"; /* Error message that displays if email format is not met */
        e.preventDefault();
    }

    if(password.value === '' || password.value == null){ /* Password text field validation */
        pass_blank_error.style.display = "block";
        e.preventDefault();
    } else if (password.value.length < 8){
        pass_length_error.style.display = "block"; /* Error message that displays if password length is not met */
    } else if(password.value.match(/[0-9]/)){
        e.preventDefault();
    } else{
        pass_num_error.style.display = "block"; /* Error message that displays if password doesn't contain numbers */
        e.preventDefault();
    }
    
    if (password.value.match(/[A-Z]/)){ /* Sets a condition that requires password to contain a upper case letter */
        e.preventDefault();
    } else{
        if(password.value === '' || password.value == null){ /* If password text box is empty, display empty text box error message */
            pass_upper_error.style.display = "none";
        }else{
            pass_upper_error.style.display = "block"; /* If password doesn't contain an upper case letter, displat an error message */
            e.preventDefault();
        }
        
    }

    if (password.value.match(/[a-z]/)){ /* Sets a condition that requires password to contain a lower case letter */
        e.preventDefault();
    } else{
        if(password.value === '' || password.value == null){ /* If password text box is empty, display empty text box error message */
            pass_lower_error.style.display = "none";
        }else{
            pass_lower_error.style.display = "block"; /* If password doesn't contain an upper case letter, displat an error message */
            e.preventDefault();
        }
        
    }

    if(passConfirm.value === '' || passConfirm.value == null){ /* Password Confirmation text field validation */
        passConfirm_blank.style.display = "block";
        e.preventDefault();
    } else if (password.value == passConfirm.value){ /* If password and confirmation password match exactly, the condition is met */
        e.preventDefault();
    }else{
        passConfirm_error.style.display = "block"; /* Error message displays if passwords do not match */
        e.preventDefault();
    }

    if (phone.value === '' || phone.value == null){ /* Phone Number text field validation */
        phone_blank_error.style.display = "block"; 
        e.preventDefault();
    } else if (phone.value.length < 10 || phone.value.length > 12){ /* Phone number must be between 9 and 12 digits */
        phone_length_error.style.display = "block" /* Error message displays if phone number is not between 9 and 12 digits */
        e.preventDefault();
    }else{
        e.preventDefault();
    }
    
    if (phone.value.match(/[a-z]/)){ /* Phone number cannot contain letters */
        phone_num_error.style.display = "block" /* Error message displays is phone number text box contains lower case letters */
        e.preventDefault();
    }else if (phone.value.match(/[A-Z]/)){ /* Error message displays is phone number text box contains upper case letters */
        phone_num_error.style.display = "block"
        e.preventDefault();
    }else {
        e.preventDefault();
    }


})