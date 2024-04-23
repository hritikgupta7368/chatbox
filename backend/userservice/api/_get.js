import express from "express";
const getrouter = express.Router();



getrouter.get('/api/', async(req , res) => {
    const userId = req.query.userId;
    if(!userId) {
      return res.send("no id")
    }
    const userInstance = req.userservice
    
    
  })
  getrouter.get('/api/getuser',async(req, res) => {
    //url query params
    const userId = req.query.userId
    if(!userId) {
      return res.send("no data found")
    }
    const userInstance = req.userservice
    let user = userInstance.getUser(userId)
    user.then(user => res.json(user)).catch(err => res.json(err))
  })
export default getrouter