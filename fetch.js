const express = require('express');
const app = express();
app.use(express.json());
PORT = 8080;

//This is only for testing purpose
// const users = [
//   { id:1 , name:'User1'},
//   { id:2 , name:'User2'},
//   { id:3 , name:'User3'},
//   { id:4 , name:'User4'},
//   { id:5 , name:'User5'},
//   { id:6 , name:'User6'},
//   { id:7 , name:'User7'},
//   { id:8 , name:'User8'},
//   { id:9 , name:'User9'},
//   { id:10 , name:'User10'},
// ]

// app.get('/users',(req,res)=>{
//   const page = parseIntreq.query.page;
//   const limit = parseIntreq.query.limit;

//   const startIndex = (page-1)*limit;
//   const endIndex = page*limit;

//   const results = {}
//   results.results = users.slice(startIndex,endIndex)
//   res.json(results);
// })
app.get('/api/branches/autocomplete',(req,res)=>{
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const startIndex = (page-1)*limit;
  const endIndex = page*limit;

  const branches = {}
  
  branches.branches = autocomplete.slice(startIndex,endIndex)
 res.json(branches);
})

app.get('/api/branches/:city',(req,res)=>{
  const branch = branches.find( c => c.city === JSON.stringify(req.params.city))
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const startIndex = (page-1)*limit;
  const endIndex = page*limit;

  const branches = {}
  
  branches.branches = branch.slice(startIndex,endIndex)

  if(!branches)  return res.status(404).json({error:"Branch Not Found "})
  res.json(branches);
})

app.listen(PORT,()=>{
    console.log(`Application is running on Port No. ${PORT}`);
})