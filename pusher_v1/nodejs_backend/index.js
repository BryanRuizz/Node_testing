const express = require('express')
const cors = require('cors')
const Pusher = require("pusher");
const path = require('path');


const pusher = new Pusher({
  appId: "1629802",
  key: "efc5c18caf9f89f8e460",
  secret: "130d712852b5c4eef4a5",
  cluster: "mt1",
  useTLS: true
});

const app = express();


app.use(cors({
origin:['http://localhost:3000','http://localhost:8080','http://localhost:4200']
}))

app.use(express.json())

app.post('/api/messages', async ( req, res)=>{
    await pusher.trigger("banana-666", "chat-event", {
        username: req.body.username,
        message: req.body.message
      });

      res.json([]);
})

//servir worker??
app.get('/service-worker.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.sendFile(path.resolve(__dirname, 'service-worker.js'));
});
// 

console.log('listening to port 8000');
app.listen(8000);
