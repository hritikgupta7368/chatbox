import express from "express";
const postrouter = express.Router();


postrouter.post('/api/createcontact', async(req , res) => {
    // const userId = req.query.userId;
    // if(!userId) {
    //   return res.send("no id")
    // }
    // const contactInstance = req.contactservice
    // let contacts = contactInstance.getAllContacts(userId);
    // contacts.then(contact => res.send(contact));
    res.send('post also working')
  })

  
postrouter.post('/api/connecttouser',async(req , res) => {
  const data = req.body
  if(!data){
    return res.send("no data found")
  }
   const contactInstance = req.contactservice
   let response = contactInstance.connecToUser(data.userId)
   return res.send('success')
})
export default postrouter