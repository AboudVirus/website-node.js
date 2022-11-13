const app = require('express')();

module.exports = () => {
  console.log("Runing [server.js]");
  
  
app.get('/', async (req, res) => {
 return res.status(200).send({status:"success",code:200});
}) 
  
  
app.get('*', async (req, res) => {
 return res.status(404).send({status:"not found",code:404});
})
}

app.listen(3000, () => {
  console.log("Server is Started");
});
