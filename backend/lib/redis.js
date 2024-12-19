import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config({});
//INFO: It is a key value store.

export const redis = new Redis(process.env.REDIS_URL);
