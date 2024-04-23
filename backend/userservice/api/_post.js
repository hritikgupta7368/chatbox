import express from "express";
const postrouter = express.Router();
import axios from 'axios'

postrouter.post('/api/createnewuser', async(req , res) => {
  //json input
    const data = req.body
    if(!data){
      res.send("no data found")
    }
    const parsedData = {
      name : data[0].name,
      username : data[0].name
    }
    const userInstance = req.userservice
    let newuser = userInstance.createNewUser(parsedData)
    newuser
    .then(user => (
      axios.post('http://localhost:8000/contacts/api/connecttouser',user)
      .then(response => response.data)
    ))
    .then(user => res.json(user))
    .catch(err => res.json(err))

  })


export default postrouter