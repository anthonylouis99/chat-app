let johnBtn= document.querySelector("#John");
let janeBtn=document.querySelector("#Jane");
let personBtn=document.querySelectorAll(".person-btn")
let h2Text=document.querySelector(".chat-header");
let chatMessages = document.querySelector(".messages");
let chatInput = document.querySelector(".chat-input");
let chatScreen = document.querySelector(".chat-screen");
let clearChatBtn = document.querySelector(".clear-chat-btn");
let chatInputForm=document.querySelector(".chat-form"); 
let messageSender = "john";
function chatMessageElement() {
    personBtn.forEach(btn => {
       btn.addEventListener("click",function (e) {
        let activeBtn=e.target;
        let activeid=activeBtn.id;
       if (activeBtn.id==="John") {
        johnBtn.classList.add("active-btn");
        janeBtn.classList.remove("active-btn");
        messageSender="john";
           }else if(activeBtn.id==="Jane"){
           johnBtn.classList.remove("active-btn");
           janeBtn.classList.add("active-btn");
           messageSender="jane";
       }
        h2Text.innerText = activeid + " is typing....";
        chatInput.placeholder = "type here, "+activeid+"....";
        chatInput.focus();
       })  
    });
    swap();
}
chatMessageElement();
let timestamp = new Date().toLocaleString("en-us", { hour: "numeric", minute: "numeric", hour12: true });
function swap() {
    chatInputForm.addEventListener("submit", function (e) {
        e.preventDefault(); 
        if (messageSender === "john") {
            chatScreen.innerHTML += "<div  class='message blue-bg'> "
                + "<div class='message-sender'>" + messageSender + "</div>"
                + "<div class='message-text'>" + chatInput.value + "</div>"
                + "<div class='message-timestamp'>" + timestamp + "</div>" + "</div>"
             } 
        if (messageSender === "jane") {
            chatScreen.innerHTML += "<div  class='message gray-bg'> "
                + "<div class='message-sender'>" + messageSender + "</div>"
                + "<div class='message-text'>" + chatInput.value + "</div>"
                + "<div class='message-timestamp'>" + timestamp + "</div>" + "</div>"
        }
        chatInput.value="";
        chatScreen.scrollTop = chatScreen.scrollHeight;
    });
    
}

clearChatBtn.addEventListener("click",function () {
    chatScreen.innerHTML="";
    h2Text.innerText = "john is online....."

})




