const express = require('express');
const app = express();
app.use(express.json());
PORT = 8080;

app.get('/api/branches/autocomplete',(req,res)=>{
 res.json(autocomplete);
})

app.get('/api/branches/:city',(req,res)=>{
  const branch = branches.find( c => c.city === JSON.stringify(req.params.city))

  if(!branch)  return res.status(404).json({error:"Branch Not Found "})
  res.json(branch);
})

app.listen(PORT,()=>{
    console.log(`Application is running on Port No. ${PORT}`);
})