// import conf from "../conf/conf";
// import { Client, ID, Databases, Storage, Query } from "appwrite";

// export class Service{
//     client = new Client();
//     databases;
//     bucket;

//     constructor(){
//         this.client = new Client();
//         this.client
//             .setEndpoint(conf.appWriteUrl)
//             .setProject(conf.appWriteProjectId)
//         this.databases = new Databases(this.client);
//         this.bucket = new Storage(this.client);
//     }

//     async createpost({title, slug, content, image, status, userId}){
//         try {
//             return await this.databases.createDocument(
//                 conf.appWriteDatabaseId,
//                 conf.appWriteCollectionId,
//                 slug,
//                 {
//                     title,
//                     content,
//                     image,
//                     status,
//                     userId
//                 }
//             )
//         } catch (error) {
//             throw error
            
//         }
//     }

//     async updatepost(slug,{title,content,image,status}){
//         try {
//             return await this.databases.updateDocument(
//                 conf.appWriteDatabaseId,
//                 conf.appWriteCollectionId,
//                 slug,
//                 {
//                     title,
//                     content,
//                     image,
//                     status
//                 }
//             )
//         } catch (error) {
//             throw error
//         }
//     }

//     async deletepost({}){
//         try {
//             await this.databases.deleteDocument(
//                 conf.appWriteDatabaseId,
//                 conf.appWriteCollectionId,
//                 slug
//             )
//             return true
//         } catch (error) {
//             throw error
//             return false
//         }
//     }

//     async getpost(slug){
//         try {
//             return await this.databases.getDocument(
//                 conf.appWriteDatabaseId,
//                 conf.appWriteCollectionId,
//                 slug
//             )
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     async getPosts(queries = [Query.equal("status","active")]){
//         try {
//             return await this.databases.listDocuments(
//                 conf.appWriteDatabaseId,
//                 conf.appWriteCollectionId,
//                 queries

//             )
//         } catch (error) {
            
//         }

//     }

//     async uploadFile(file){
//         try {
//             return await this.file.bucket.createFile(
//                 conf.appWriteBucketId,
//                 ID.unique(),
//                 file
//             )
            
//         } catch (error) {
//             console.log("Error in uploading file",error)
//         }
//     }

//     async deleteFile(fileId){
//         try {
//             await this.bucket.deleteFile(
//                 conf.appwriteBucketId,
//                 fileId
//             )
//             return true
//         } catch (error) {
//             console.log("Appwrite serive :: deleteFile :: error", error);
//             return false
//         }
//     }

//     getFilePreview(fileId){
//         return this.bucket.getFilePreview(
//             conf.appwriteBucketId,
//             fileId
//         )
//     }

// }

// const service = new Service();

// export default service;








//chatgpt file
import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createpost({ title, slug, content, image, status, userId }) {
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
            );
        } catch (error) {
            throw error;
        }
    }

    async updatepost(slug, { title, content, image, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    image,
                    status
                }
            );
        } catch (error) {
            throw error;
        }
    }

    async deletepost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async getpost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            );
        } catch (error) {
            console.log(error);
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                queries
            );
        } catch (error) {
            console.log(error);
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Error in uploading file", error);
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appWriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appWriteBucketId,
            fileId
        );
    }
}

const service = new Service();

export default service;
