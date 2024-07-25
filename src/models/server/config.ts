import env from "@/app/env";
import { Avatars, Client, Databases, Storage, Users } from "node-appwrite"
// here we use node sdk for server side
// https://github.com/appwrite/sdk-for-node
// https://appwrite.io/docs/sdks
const client = new Client()
    .setEndpoint(env.appwrite.endpoint) // Your API Endpoint
    .setProject(env.appwrite.projectid) // Your project ID
    .setKey(env.appwrite.apikey) // Your secret API key

const databases = new Databases(client)
const avatars = new Avatars(client);
const storage = new Storage(client);
const users = new Users(client)

export { client, databases, users, avatars, storage }