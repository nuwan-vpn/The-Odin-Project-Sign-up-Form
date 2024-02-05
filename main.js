document.addEventListener("DOMContentLoaded", function(){
    
    let password = document.querySelector("#user_password");
    let confirmPassword = document.querySelector("#confirm_password");
    let error =document.querySelector("#error");

    if(password != confirmPassword){
        error.innerHTML = "*Passwords do not match."
    }
})