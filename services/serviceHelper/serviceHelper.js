import { ethers } from "ethers";
import daiMumbaiABI from '../../utils/abi/mumbai/daiMumbaiABI.js'
import {CreateProvider} from '../common/provider.js'; 
import * as dotenv from 'dotenv';
dotenv.config();

const rpc_url_mumbai = process.env.POLYGON_NODE_MUMBAI;
const rpc_url_sepolia = process.env.ETH_NODE_SEPOLIA;



export async function getTokenBalancesSepollia(inputArray, userAddress) {
    try {
        const provider = await CreateProvider(rpc_url_sepolia);
        const ABI = daiMumbaiABI;
        const balances = {};
        for(let i=0;i<inputArray.length;i++){
          try{
            const contractInstance = new ethers.Contract(inputArray[i],ABI,provider);
       
            const balanceOf = await contractInstance.balanceOf(userAddress);
   

            balances[`balance${i}`] = balanceOf;

          }catch(error){
              console.log(`Error getting the ${i} Token`);
          }
        }
        return balances;
    } catch (error) {
        console.error('Error:', error.message);
        return 0; 
    }
}




export async function getTokenBalancesMumbai(inputArray, userAddress) {
    try {
        const provider = await CreateProvider(rpc_url_mumbai);
        const ABI = daiMumbaiABI;;
        const balances = {};
        for(let i=0;i<inputArray.length;i++){
          try{
            const contractInstance = new ethers.Contract(inputArray[i],ABI,provider);
         
            const balanceOf = await contractInstance.balanceOf(userAddress);
     

            balances[`balance${i}`] = balanceOf;

          }catch(error){
              console.log(`Error getting the ${i} Token`);
          }
        }
        return balances;
    } catch (error) {
        console.error('Error:', error.message);
        return 0; 
    }
}