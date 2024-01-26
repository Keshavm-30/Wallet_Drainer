
import {getTokenBalancesMumbai,getTokenBalancesSepollia} from './serviceHelper/serviceHelper.js';
import * as dotenv from 'dotenv';
dotenv.config();


export async function getMumbaiDetails(userAddress) {
    const contractAddressDAI = process.env.DAI_MUMBAI;
    const contractAddressUSDC = process.env.USDC_MUMBAI;
    const contractAddressWBTC = process.env.WBTC_MUMBAI;

    try {
        const tokenBalances = await getTokenBalancesMumbai([contractAddressUSDC,contractAddressWBTC,contractAddressDAI], userAddress);

        const tokenBalancesMumbai = {
            usdc: tokenBalances.balance0,
            wbtc: tokenBalances.balance1,
            dai: tokenBalances.balance2,
        };

        return tokenBalancesMumbai;
    } catch (error) {
        console.error('Error:', error.message);
        return {}; 
    }
}


export async function getSepoliaDetails(userAddress) {
    const contractAddressDAI = process.env.DAI_SEPOLIA;
    const contractAddressUSDC = process.env.USDC_SEPOLIA;
    const contractAddressWBTC = process.env.WBTC_SEPOLIA;

    try{

    const tokenBalances = await getTokenBalancesSepollia([contractAddressUSDC,contractAddressWBTC,contractAddressDAI], userAddress);

    const tokenBalancesSepolia = {
        usdc: tokenBalances.balance0,
        wbtc: tokenBalances.balance1,
        dai: tokenBalances.balance2,
    };

    return tokenBalancesSepolia;
}catch(error){
    console.error('Error:', error.message);
    return {}; 
}
}





