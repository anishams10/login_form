//Selecting input box
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
console.log(password.type);
let confirmPassword = document.getElementById("confirmPassword")
let box = document.getElementById("box");

let submit = document.getElementById("btn-submit");

let firstName_error = document.getElementById("firstName_error")
let lastName_error = document.getElementById("lastName_error")

let email_error = document.getElementById("email_error")
let password_error = document.getElementById("password_error")
let confirmPassword_error = document.getElementById("confirmPassword_error")

//Enabling the submit button when all fields are filled
function checkInputFields()
{
    let inputs = document.querySelectorAll('input:not([type = "checkbox"])')
    for(let input of inputs)
    {
        if(input.value == "")
        {
            submit.disabled = true;
            return;
        }
    }
    if(!box.checked)
    {
        submit.disabled = true;
        return;
    }
    submit.disabled = false;
    submit.style.backgroundColor = "green";
    submit.style.color = "white";
}


//Getting name as Uppercase
firstName.addEventListener("input", function()
{
    firstName.value = firstName.value.toUpperCase();
    checkInputFields();
    firstName.style.border = "";
    firstName_error.textContent = "";
})

lastName.addEventListener("input", function()
{
    lastName.value = lastName.value.toUpperCase();
    checkInputFields();
    lastName.style.border = "";
    lastName_error.textContent = "";
})


//Getting mail as a lowercase
email.addEventListener("input", function()
{
    email.value = email.value.toLowerCase();
    checkInputFields();
    email.style.border = "";
    email_error.textContent = "";
})


password.addEventListener("input", function()
{
    password.style.border = "";
    password_error.textContent = "";
    checkInputFields();
})
confirmPassword.addEventListener("input", function()
{
    confirmPassword.style.border = "";
    confirmPassword_error.textContent = "";
    checkInputFields();
})
box.addEventListener("change", function()
{
    checkInputFields();
})

//Submit button function
submit.addEventListener("click", function()
{
    let isValid = true;

    //Checking Format for Names
    let names = [firstName, lastName];
    let name_error =[firstName_error, lastName_error];
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

    for(let j = 0; j < names.length; j++)
    {
        let name = names[j];
        let error = name_error[j];
        for(let i = 0; i < name.value.length; i++)
        {
            let char = name.value[i];
            if(!letters.includes(char))
            {
                //alert("Fill " + name.name +" with only alphabets");
                //name.style.border = "solid 1px red";

                error.textContent = "*Only alphabets are allowed";
                isValid = false;
                break;
            }
            if(char == " " && (i == 0 || i == name.value.length-1))
            {
                //name.style.border = "solid 1px red";

                error.textContent = "Space allowed only in the middle";
                isValid = false;
                break;
            }
        }
    }
    
    //Validating for email
        if(!email.value.includes("@") || email.value.startsWith("@") || email.value.endsWith("@") || !email.value.endsWith(".com"))
        {
            //email.style.border = "solid 1px red";

            email_error.textContent = "Email format is incorrect";
            isValid = false;
        }

    //Validating for password
    let pwd = password.value;
    if((pwd.length < 6 || pwd.length > 15) || !/[a-z]/.test(pwd) || !/[A-Z]/.test(pwd) || !/[0-9]/.test(pwd) || !/[!@#$%^&*]/.test(pwd))
    {
        //password.style.border = "solid 1px red";
        password_error.textContent = "Password format is incorrect";
        isValid = false;
    }
    else
    {
        password_error.textContent = "";
    }
    

    //Validating for confirm password
    if(confirmPassword.value != pwd)
    {
        //confirmPassword.style.border = "solid 1px red";
        confirmPassword_error.textContent = "Password Mismatch";
        isValid = false;
    }

    if(isValid)
    {
        alert ("Logged-in successfully");
        window.location.reload();
    }
    
})
