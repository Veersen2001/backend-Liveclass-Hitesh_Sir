
import app from "./app.js";
import mongoose from "mongoose";
const port = 3000


// database connection
// const monggoose = require('mongoose');

// mongoose.connect('mondodb://127.0.0.1:27017/test');

// database connection may fail
// so we use try and catch
// database is always in other continent
// database is always a few time to take req and res 
// so we handle time in async and await
// we must effy because not evalute outside enviorment


// database connection in professional approch

(async()=>{
  try{
    // db connection
    await mongoose.connect('srtring/url');
    console.log("DB connected successfully");
  
    // express event
    app.on("error",(err)=>{
      console.log("error:",err);
      throw err
    })

    // code of server listen

    const onListening = ()=>{
      console.log(`Listening on port ${port}`);
    }
    app.listen(port,onListening);
  }
  catch(error)
  {
    console.error("Error:",error);
  }
})()

// if database cannot connect then why listen.
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })