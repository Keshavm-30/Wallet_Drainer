import { ethers } from "ethers";

export async function CreateProvider(rpc_url){
    try{
        const provider = new ethers.JsonRpcProvider(rpc_url);
        return provider;
    }catch(error){
        console.log("Error Creating provider");
    }
}