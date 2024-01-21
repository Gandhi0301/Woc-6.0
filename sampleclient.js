// const socket = io('http://localhost:3000')
// const messageForm= document.querySelector('.send-container')
// const messageContainer= document.querySelector('.chat')
// const messageInput= document.querySelector('.send-container input')

// appendMessage('You joined')
// socket.emit('new-user', uname) //bhul che

// socket.on('chat-message',data=>{
//     appendMessage('${data.uname}: ${data.message}') //bhul  che
// })

// socket.on('user-connected',uname=>{
//     appendMessage('${crtext} connected')//bhul che
// })

// socket.on('user-disconnected',uname=>{
//     appendMessage('${crtext} disconnected')//bhul che
// })

// messageForm.addEventListener('submit', e =>{
//     e.preventDefault;
//     const message = messageInput.value;
//     appendMessage('You: ${message}')
//     socket.emit('send-chat-message',message);
//     messageInput.value = '';
// })

// function appendMessage(message) {
//     const messageElement = document.createElement('mdiv');
//     messageElement.innerText = message;
//     messageContainer.append(messageElement);
//  }



const socket = io('http://localhost:3000')
const messageForm= document.querySelector('.send-container')
const messageContainer= document.querySelector('.chat')
const messageInput= document.querySelector('.send-container input')

socket.on('chat-message', data =>{
    appendMessage(data)    
})

messageForm.addEventListener('submit', e =>{
    e.preventDefault()
    const message = messageInput.value
    socket.emit('send-chat-message',message)
    messageInput.value= ''
})

function appendMessage(message){
    const messageElement= document.createElement('div')
    messageElement.innerText = message 
    messageContainer.append(messageElement)
}