console.log("Hello, builder");


//contact form

let contactForm = document.querySelector("#contactForm");
let formMessage = document.querySelector("#formMessage");


contactForm.addEventListener("submit", function(event){
  
    event.preventDefault();

    contactForm.reset();

    formMessage.classList.remove("hidden");

});







