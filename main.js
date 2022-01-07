const express = require("express") ;
const app = express() ;

app.use(express.json()) ;

let cors = require("cors") ;
app.use(cors()) ;

const { dispAllMessages , addUser} = require("./user.js") ;

//http://localhost:5000/addmessage
app.get("/addmessage" , async (req , res) => {
    res.json({ tect : "Hello"});
}) ;

//http://localhost:5000/showmessages
app.post("/showmessages" , async(req , res)=> {
    const list = req.body ; 
    await dispAllMessages(list) ; 
}) ;

//http://localhost:5000
app.listen(5000, () => {console.log("Connection Success!!");}) ;
 