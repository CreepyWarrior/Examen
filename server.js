const express = require("express");

const app = express();

/* mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/gobierno").then(_=>{
    console.console.log("-------------* Conected to Database *-------------");
})

mongoose.connection.on('error',(err)=>{
    console.error(`MongoDB connection error:${err}`);
    process.exit(-1);
}) */

app.use(express.json ({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb',extended:true}));

app.listen(4000, ()=>{
    console.log("Diego Josue Palos Padilla osea Yisus :)");
})