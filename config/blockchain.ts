import dotenv from 'dotenv';
import { ethers } from 'ethers';

dotenv.config();

const rpcUrl = process.env.RPC_URL;
const privateKey = process.env.PRIVATE_KEY;

if (!rpcUrl) {
  throw new Error('RPC_URL is not defined in the environment variables');
}

if (!privateKey) {
  throw new Error('PRIVATE_KEY is not defined in the environment variables');
}

export const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
export const wallet = new ethers.Wallet(privateKey, provider);
