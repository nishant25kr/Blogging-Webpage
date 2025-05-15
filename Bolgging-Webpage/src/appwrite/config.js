import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client = new Client();
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createpost({title, slug, content, image, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    image,
                    status,
                    userId
                }
            )
        } catch (error) {
            
        }
    }

    async updatepost(slug,{title,content,image,status}){
        try {
            return await 
        } catch (error) {
            
        }
    }

}

const service = new Service();

export default service;