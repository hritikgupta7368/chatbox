import prisma from "../config/prismadb.js";

export class UserService {

// getuser
// getuserallcontacts

    constructor(app){
        this.app = app;
    }
   
    async createNewUser(data){
        const promise = new Promise(async function(resolve, reject){
            const user = await prisma.user.create({
                data :{
                    username : data?.username,
                    name : data?.name,
                    description : data?.description
                }
            })
           
            if(!user){
                console.log("User creation failed")
                reject("User not created failed")
            }
            console.log("User created")
            resolve({
                userId : user.userId,
                name : user.name,
                createdAt:user.createdAt,
            })
        })
        return promise
    }

    async getUser(userId){
        const promise = new Promise(async function(resolve, reject){
            const user = await prisma.user.findUnique({
               where : {
                userId : userId,
               }
            })
            if(!user){
                console.log("no user found")
                reject("no user found")
            }
            console.log("User found")
            resolve({
                userId : user.userId,
                username : user.username,
                name : user.name,
            })
        })
        return promise
    }
   
}
