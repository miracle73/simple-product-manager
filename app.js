const express = require('express');
const connectdb = require('./db/connect.js');
const app = express();
const router = require('./routes/task.js')
require('dotenv').config()
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.get('/', (req,res) => {
   res.send('<h2>Assignment</h2>') 
})

app.use('/api/v1/products', router)
const start = async () => {
    try{await connectdb(process.env.MONGO_URI)
    app.listen(5000, () => {
        console.log("Server is listening on port 5000")
    })
} catch (error) {console.log(error)}
}
start()
