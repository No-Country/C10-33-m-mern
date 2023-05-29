import { config } from 'dotenv';

config();

export const URI_MONGO = process.env.URI_MONGO || 'mongodb+srv://nmayord:Nat1mayor23@cluster0.sy4jpe7.mongodb.net/GreenCycle?retryWrites=true&w=majority';

export const PORT = process.env.PORT || 4200;

export const API_IDENTIFIER = process.env.API_IDENTIFIER || 'https://greencycle/api';

export const BASE_URL = process.env.BASE_URL || 'https://dev-ezrl2ws3gj66dktc.us.auth0.com/'

export const CLIENT_ID = process.env.CLIENT_ID || 'kIYNuhL7SKBkmWBG6JqV1nPHRF2PK4mf'

export const CLIENT_SECRET = process.env.CLIENT_SECRET || 'Y3AjiZPeboPxe6jJJ9lmswI8SAfM2XTg9hNVEbTZruNYNUgwD_0XCp3TiuLEqgOV' 

export const ISSUER_BASE_URL = process.env.ISSUER_BASE_URL || 'https://dev-ezrl2ws3gj66dktc.us.auth0.com/'

export const TOKEN = process.env.TOKEN || 'RS256'

export const DOMAIN = process.env.DOMAIN || '=dev-ezrl2ws3gj66dktc.us.auth0.com'




