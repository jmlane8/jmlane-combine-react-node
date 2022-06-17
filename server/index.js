//server/index.js
//rmdir /s /q .git
const path = require('path');  //this
const express = require("express")

const PORT = process.env.PORT || 3001

const app = express()

//this
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));


app.get("/api", (req, res) => {
    console.log("got it")
    res.json({message:"Hello from server!"})
})

//this
// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(PORT, () => {
    console.log("Server listening on ${PORT}")
})