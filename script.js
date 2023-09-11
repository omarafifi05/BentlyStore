document.addEventListener("DOMContentLoaded", function() {
    const messageTextarea = document.getElementById("message");
    const sendButton = document.getElementById("submit");
    const thename = document.getElementById("name");
    const email = document.getElementById("email");


    sendButton.addEventListener("click", function() {


        if (messageTextarea.value.trim() !== "" && email.value.trim() !== "" && thename.value.trim() !== "" ) {
            
     

    window.location.href = "validatemessage.html";
        } else {
            alert("Please enter the all informations!! ");
            thenamename.value = "";
            email.value = "";
            messageTextarea.value = "";
            
        }
        
    });
});



