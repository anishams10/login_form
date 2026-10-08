//Selecting input box
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password =document.getElementById("password");
let box = document.getElementById("box");

let submit = document.getElementById("btn-submit");


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
}


//Getting name as Uppercase
firstName.addEventListener("input", function()
{
    firstName.value = firstName.value.toUpperCase();
    checkInputFields();
})

lastName.addEventListener("input", function()
{
    lastName.value = lastName.value.toUpperCase();
    checkInputFields();
})


//Getting mail as a lowercase
email.addEventListener("input", function()
{
    email.value = email.value.toLowerCase();
    checkInputFields();
})


password.addEventListener("input", function()
{
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
    /* let inputs = document.querySelectorAll("input")

    //Validating Input field is not empty
    for(let input of inputs)
    {
       if( input.value == "")
       {
        alert ("Fill " + input.name);
        input.style.border = "solid 1px red";
        return;
       }
    }
     */

    //Checking Format for Names
    let names = [firstName, lastName];
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

    for(let name of names)
    {
        for(let i = 0; i < name.value.length; i++)
        {
            let char = name.value[i];
            if(!letters.includes(char))
            {
                alert("Fill " + name.name +" with only alphabets");

                name.style.border = "solid 1px red";

                let errMessage = document.createElement("p");
                errMessage.textContent = "*Only alphabets are allowed";         
                errMessage.classList.add("errorMessage");

                name.after(errMessage);
                isValid = false;
                break;
            }
            if(char == " " && (i == 0 || i == name.value.length-1))
            {
                name.style.border = "solid 1px red";

                let errMessage = document.createElement("p");
                errMessage.textContent = "Space allowed only in the middle";
                errMessage.classList.add("errorMessage");
                name.after(errMessage);
                isValid = false;
                break;
            }
        }
    }
    
    //Validating for email
        if(!email.value.includes("@") || email.value.startsWith("@") || email.value.endsWith("@") || !email.value.endsWith(".com"))
        {
            email.style.border = "solid 1px red";

            let errMessage = document.createElement("p");
            errMessage.textContent = "Email format is incorrect";
            errMessage.classList.add("errorMessage");

            email.after(errMessage);
            isValid = false;
        }

    //Validating for password
    let pwd = password.value;
    if((pwd.length < 6 || pwd.length > 15) || !/[a-z]/.test(pwd) || !/[A-Z]/.test(pwd) || !/[0-9]/.test(pwd) || !/[!@#$%^&*]/.test(pwd))
    {
        password.style.border = "solid 1px red";

        let errMessage = document.createElement("p");
        errMessage.textContent = "Password format is incorrect";
        errMessage.classList.add("errorMessage");

        password.after(errMessage);
        isValid = false;
    }

    if(isValid)
    {
        alert ("Logged-in successfully");
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        password.value = "";

        box.checked = false;
        checkInputFields();
    }
    
})
