const express= require('express');
const cors= require('cors');
const bodyparser = require('body-parser');
//const dotenv = require('dotenv').config()

const app = express();

app.use(cors())

const port = process.env.PORT || 5000;

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json())

//defining a simple route
app.get('/',(req,res) =>{
    res.send('Server running ......')
})

//routes
const postRoutes= require('./routes/routes');
app.use('/api/posts',postRoutes);

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})