import prisma from "../config/prismadb.js";

 export class ContactService {
   
    constructor(app){
        this.app = app;
    }
    //get handler
     getContact(){
        api.GET(this.app)
        console.log("api called")
        return "return also working"
        // GET(this.app)
    }

    async connecToUser(userId){
        const promise = new Promise(async function(resolve, reject){
          try{
            const newcontact = await prisma.contacts.create();
          if(!newcontact){
            throw new Error("failed to create contact")
          }
          console.log(newcontact)
          resolve(newcontact);
      } catch (error) {
        reject(error);
      }
      })
      return promise
    }



    getAllContacts(id){
      let contacts
      const promise = new Promise(async function(resolve, reject){
        // console.log(id)
        // if (!id){
        //   reject("no id")
        // }
        contacts = await prisma.contacts.findMany({
          include: {
            individuals: true,
            groups: true,
          },
        });
        console.log(contacts)
        resolve(contacts)

      })
      return promise
    }

    getUserByContacts(){}


    //post handler
    addContact(id){}
    updateContact(id){}


    //delete handler
    deleteContact(id){}

    //mock data
    async addMockdata({qty , type}){
      let newContact

        const promise = new Promise(async function(resolve, reject){
          if (type === 'i'){
            newContact = await prisma.contacts.create({
                data: {
                  userId: 'user1',
                  individuals: {
                    create: {
                      name: 'John Doe',
                    },
                  },
                },
              });
        }
        else {
           newContact = await prisma.contacts.create({
                data: {
                  userId: 'user1',
                  groups: {
                    create: {
                      name : '2nd group',
                      groupMembers : {
                        create : {
                          name: 'Hritik Gupta'
                        }
                      }
                    },
                  },
                },
              });
        }
        if (newContact){
          resolve ("successfully created");
      }
      reject ("failed")
        })
        
        
        return promise
    }


}


