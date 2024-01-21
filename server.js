// const io= require('socket.io')(3000,{
//    cors:{
//       origin: ["http://localhost:5500"],
//    },
// })
// const users = {}

// io.on('connection',socket=>{
//    socket.on('new-user', uname=>{//bhul che
//       users[socket.id] = uname
//       socket.broadcast.emit('user-connected',uname)
//    })
//    // socket.broadcast.emit('chat-message','User joined');
//    socket.on('send-chat-message', message =>{
//       socket.broadcast.emit('chat-message',{message:message,uname:users[socket.id]});
//    })//bhul che upper ni line ma

//    socket.on('disconnect', message =>{
//       socket.broadcast.emit('user-disconnected', users[socket.id]);//bhul che
//       delete users[socket.id]
//    })
// })



const io= require('socket.io')(3000,{
   cors:{
      origin: ["http://localhost:5500"],
   },
})

//This function assigns a socket to each user:
io.on('connection', socket=>{
   socket.on('send-chat-message', message =>{
      socket.broadcast.emit('chat-message', message)
   })
})