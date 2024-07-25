import env from "@/app/env";
import { Client, Account, Databases, Avatars,Storage  } from "appwrite";

const client = new Client()
    .setEndpoint(env.appwrite.endpoint) // Your API Endpoint
    .setProject(env.appwrite.projectid); // Your project ID

const databases = new Databases(client) //give access database
const account = new Account(client); //give access to accounts
const avatars = new Avatars(client); //for light weight images
const storage = new Storage(client); //give access storage

export {databases,account,avatars,storage}
