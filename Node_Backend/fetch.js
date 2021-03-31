const express = require('express');
const app = express();
app.use(express.json());
PORT = 8080;

app.get('/api/branches/autocomplete?q=RTGS&limit=3&offset=0',(req,res)=>{
 res.send(autocomplete);
})

app.get('/api/branches/:city&limit=4&offset=0',(req,res)=>{
  const branch = branches.find( c => c.city === JSON.stringify(req.params.city))

  if(!branch)  return res.status(404).json({error:"Branch Not Found "})
  res.send(branch);
})

app.listen(PORT,()=>{
    console.log(`Application is running on Port No. ${PORT}`);
})