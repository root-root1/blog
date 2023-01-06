const express = require("express")
const BlogRouter = require('./src/blog/route') 
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json())


app.use("/api/v1/blog", BlogRouter)

app.listen(process.env.SERVERPORT, () => {
    console.log("Server is up and Running on port 8080")
})
