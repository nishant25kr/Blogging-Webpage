// import conf from "../conf/conf";
// import {client,Id,Account} from 'appwrite'

// export class AuthService {
//     client = new client();
//     account;
//     constructor(){
//         this.client
//             .setendpoint(conf.appWriteUrl)
//             .setProject(conf.appWriteProjectId)
//         this.account = new Account(this.client)    
//     }

//     async createAcount({email, password, name}){
//         try {
//             await userAcount = await this.account.create(Id.unique(),email,password,name);

//             if(userAcount){
//                 //call another method
//             }
//             else{
//                 return userAcount;
//             }

//         } catch (err) {
//             throw err
//         }
//     }

//     async login({email,password}){
//         try {
//             return await this.account.createEmailSession(email,password)
//         } catch (error) {
//             throw error
//         }
//     }

//     async getcurrentuser(){
//         try {
//             return await this.account.get();
//         } catch (error) {
//             throw error
//         }
//         return null;
//     }

// }

// const authService = new AuthService();

// export default AuthService


import conf from "../conf/conf";
import { Client, ID, Account } from 'appwrite';

export class AuthService {
    client;
    account;

    constructor() {
        this.client = new Client();
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                // call another method or return userAccount
                return userAccount;
            } else {
                return null;
            }

        } catch (err) {
            throw err;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;
