console.log("Hello, builder");



//welcome Message
let button = document.querySelector("#welcomeBtn");
let bmessage = document.querySelector("#bmessage");

button.addEventListener("click", function(){

bmessage.classList.toggle("hidden");

if(bmessage.classList.contains("hidden")){
   button.textContent = "View Welcome Message";

}else{
    button.textContent = "Hide Welcome Message";
}

});



//project details
let pButton = document.querySelector("#projectBtn");
let details = document.querySelector("#details");

pButton.addEventListener("click", function(){
    
    details.classList.toggle("hidden");
    
    if(details.classList.contains("hidden")){
         
        pButton.textContent = "View Project Details";
    }else{
        pButton.textContent = "Hide Project Details";
    }

});



//contact form

let contactForm = document.querySelector("#contactForm");
let formMessage = document.querySelector("#formMessage");


contactForm.addEventListener("submit", function(event){
  
    event.preventDefault();
    formMessage.classList.remove("hidden");

});







