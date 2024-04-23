import express from "express";
const getrouter = express.Router();



getrouter.get('/api/allcontacts', async(req , res) => {
    const userId = req.query.userId;
    if(!userId) {
      return res.send("no id")
    }
    const contactInstance = req.contactservice
    let contacts = contactInstance.getAllContacts(userId);
    contacts.then(contact => res.send(contact));
    
  })

getrouter.get('/api/getcontact', async(req , res) => {
    const contactId = req.query.contactId;
    if(!contactId) {
      return res.send("no id")
    }
    const contactInstance = req.contactservice
    let contacts = contactInstance.getAllContacts(id);
    contacts.then(contact => res.send(contact));
   
})

// app.get("/contacts/seed", async (req, res) => {
//     try {
//       const qty = Number(req.query.qty);
//       const type = req.query.type
  
//       if (qty > 20 || qty === null || type === null) {
//         return res.json({ error: "Invalid querry" });
//       }
//       let data = contactservice.addMockdata({
//           qty : qty,
//           type : type
//       })
//       data
//       .then(val => console.log(val))
//       .catch((err) => {throw new Error(err)});
  
//       if (!data || data.length <= 0) {
//         return res.send(`imcomplete failed`);
//       }
//       return res.send(data);
//     } catch (error) {
//       console.log(error);
//       return res.send(error.message);
//     }
//   });
export default getrouter