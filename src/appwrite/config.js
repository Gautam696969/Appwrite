import conf from "../conf/conf";
import { Client, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint( conf.appwriteUrl )
            .setProject( conf.appwriteProjectId );
        this.databases = new Databases( this.client );
        this.bucket = new Storage( this.client );
    }
    async createPost( { title, slug, content, featuredImage, status, userId } ) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDATABASE_ID,
                conf.appwriteCOLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId

                }
            )
        } catch ( error ) {
            console.log( "errro showed in your Pose :: in Appwrite", error );
        }
    }
    async updatePost( slug, { title, content, featuredImage, status } ) {
        try {
            return await this.databases.createPost(
                conf.appwriteDATABASE_ID,
                conf.appwriteCOLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch ( error ) {
            console.log( "This error for the updatePost", error );

        }
    }
    async deleteDocument( slug ) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDATABASE_ID,
                conf.appwriteCOLLECTION_ID,
                slug,
            );
            return true;
        } catch ( error ) {
            console.log( "Error is DeleteDocument", error );
        }
        return false
    }

    async getPost( slug ) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDATABASE_ID,
                conf.appwriteCOLLECTION_ID,
                slug,
            );

        } catch ( error ) {
            console.log( "Error of the getPost", error );
        }
        return false
    }

    async getPost( queries = [Query.equal( "status", "active" )] ) {
        try {
            return await this.databases.getPost(
                conf.appwriteDATABASE_ID,
                conf.appwriteCOLLECTION_ID,
                queries,
            )
        } catch ( error ) {
            console.log( "This is an error of the Post", error );
        }
    }
    async uploadFile( file ) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBUCKET_ID,
                ID.unique(),
                file

            )
        } catch ( error ) {
            console.log( "This is the upload file error", error )
        }
    }
    async deleteFile( fileId ) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBUCKET_ID,
                fileId
            )
        } catch ( error ) {
            console.log( "This is the error of the delete file", error )
        }
    }
    getFilePreview( fileId ) {
        return this.bucket.getFilePreview(
            conf.appwriteBUCKET_ID,
            fileId
        )
    }

}

const service = new Service();
export default service;
