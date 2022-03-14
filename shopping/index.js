const express = require('express') ; 


const app = express() ; 

app.use(express.json());

app.use('/', (req,res,next) => {
    return res.status(200).json({"msg": "Hello from shooping"}) ; 
}) 

app.listen(8003, ()=> {
    console.log('customer is listening to port 8003')
})