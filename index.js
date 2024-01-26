import express from 'express';
import bodyParser from 'body-parser';
import AccountRouter from './routes/accounts.js';
import EventEmitter from 'events';

EventEmitter.prototype._maxListeners = 100;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
  
app.use('/api/v1',AccountRouter);

// app.post('*',async(req,res)=>{
  
//   console.log();
//   res.send("Message from the server");

// })

// app.get('*',async(req,res)=>{
//   res.send("Message from the server");

// })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
    