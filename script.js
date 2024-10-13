document.addEventListener('DOMContentLoaded',function({
        
    //select the form and feedback div
    const form =document.getElementById('registration-form');
    const feedbackDiv=document.getElementById('form-feedback');

    //Add an event listener for form submission
    form.addEventListener('submit', function(event){
        //Prevent the form from submitting
        event.preventDefault();

        //Clear previous feedback
        feedbackDiv.innerHTML="";

        //Retrive and trim input values
        const username=document.getElementById('username'). values.trim();
        const email=document.getElementById('email').value.trim();
        const password=document.getElementById('password').value.trim()

        let isValid = true;
        let feedbackMessage ="";

        //Username validation (e.g., must be atleast 3 characters
        if(username.length <3){
            isValid = false;
            feedbackMessage += 'Username must be atleast 3 characters long <br>';
        }

        //Email validation (basic pattern check)

        const emailPattern = / ^[^\s@]+@[^\s@]+\.[^\s@+$/];
        if (!emailPattern.test(email)){
            isValid = false;
            feedbackMessage+= 'Please enter a valid email address.<br>';
        }
        //Password validation (e.g., atleast 8 characters)
        if(password.length <8){
            isValid= false;
            feedbackMessage+='Passowrd must be at least 8 characters long.<br>';
        }


        //Display feedback or success message
             feedbackDiv.style.display="block";
        if (isValid){
            feedbackDiv.style.color="#28a745"; 
                feedbackDiv.textContent="Registration successful !";
                  
        }else{
        feedbackDiv.innerHTML= messages.join("<br>");
                feedbackDiv.style.color="#dc3545";
        }
        });
