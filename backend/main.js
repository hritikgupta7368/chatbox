import express from "express";
import { ContactService } from "./contactservice/service/contactservice.js";
import { UserService } from "./userservice/service/user.service.js";
const app = express();
import cors from 'cors'
import routes from "./contactservice/api/index.js";
import userroutes from "./userservice/api/index.js";

//class declaration
const contactservice = new ContactService(app);
const userservice = new UserService(app)

app.use(cors())
app.use(express.json());


// middlewares
app.use('/contacts', (req, res, next) => {
  req.contactservice = contactservice;
  next();
});

app.use('/user', (req, res, next) => {
  req.userservice = userservice;
  next();
});


// contacts routes
app.use('/contacts',routes.getrouter)
app.use('/contacts',routes.postrouter)

// user routes
app.use('/user',userroutes.getrouter)
app.use('/user',userroutes.postrouter)

// chats routes
// app.use('/user',userroutes.getrouter)
// app.use('/user',userroutes.postrouter)



const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`main server is listening on port ${PORT}`);
});
