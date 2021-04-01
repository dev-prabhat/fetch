const express = require('express');
const app = express();
app.use(express.json());
PORT = 8080;

app.get('/api/branches/autocomplete',(req,res)=>{
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const startIndex = (page-1)*limit;
  const endIndex = page*limit;

  const branches = {}
  
  branches.result = autocomplete.slice(startIndex,endIndex)
 res.json(branches);
})

app.get('/api/branches/:city',(req,res)=>{
  const branch = branches.find( c => c.city === JSON.stringify(req.params.city))

  if(!branch)  return res.status(404).json({error:"Branch Not Found "})
  res.json(branch);
})

app.listen(PORT,()=>{
    console.log(`Application is running on Port No. ${PORT}`);
})