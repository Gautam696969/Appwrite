import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


export class AuthService {
    Client = new Client();
    constructor() {
        this.Client
            .setEndpoint( conf.appwriteUrl )
            .setEndpoint( conf.appwriteProjectId );
        this.account = new Account( this.Client );
    }
    async createAccount ({email, password, name}){
        try{
           const userAccount =  await  this.account.create(ID.unique(), email, password , name)   
           if(userAccount){

           }else{
            return userAccount
           } 
        }catch(error){
            throw error;
        }   
    }
    async login = ({email, password}){
        try{
            const userLogin = await this.login.create()
        }catch
    }
}

export default AuthService;
