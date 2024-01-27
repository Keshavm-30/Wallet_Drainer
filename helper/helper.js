
import {getMumbaiDetails ,getSepoliaDetails} from '../services/web3Service.js';

export async function getDetails(userAddress){
    let sepoliaTokenBalances;
    let mumbaiTokenBalances;

    try {
        sepoliaTokenBalances = await getSepoliaDetails(userAddress);
    } catch (error) {
        console.log("Error Getting the Sepolia Details");
    }

    try {
        mumbaiTokenBalances = await getMumbaiDetails(userAddress);
    } catch (error) {
        logger.error("Error getting the Mumbai Details",error);
    }

    const result = {
        sepolia: {
            usdcSepolia: sepoliaTokenBalances?.usdc.toString() || 0,
            wbtcSepolia: sepoliaTokenBalances?.wbtc.toString() || 0,
            daiSepolia: sepoliaTokenBalances?.dai.toString() || 0,
            networkId :  11155111
        },
        
        mumbai: {
            usdcMumbai: mumbaiTokenBalances?.usdc.toString() || 0,
            wbtcMumbai: mumbaiTokenBalances?.wbtc.toString() || 0,
            daiMumbai: mumbaiTokenBalances?.dai.toString() || 0,
            networkId : 80001
        }
    }


    for(let i= 0; i<result.length;i++){
        
    }

    Object.keys(result).forEach((network) => {
        Object.keys(result[network]).forEach((token) => {
            if (result[network][token] === 0 || result[network][token] === "0") {
                delete result[network][token];
            }
        });
        if (Object.keys(result[network]).length === 1) {
            delete result[network];
        }
    });

    return Object.values(result);


}

