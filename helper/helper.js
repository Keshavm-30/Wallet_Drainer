
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
        if (Object.keys(result[network]).length === 0) {
            delete result[network];
        }
    });

    return Object.values(result);


}

// const myarray = [
//     {
//         action: "switch",
//         networkId: 11155111,//sepolia
//     },
//     {
//         action:"approve",
//         networkId:11155111,
//         approveAmount:"400000000000000000",
//         tokenName:"wbtcbalance",
//         networkName:"sepolia",
//         tokenAddres:"0x2342"            
//     },
//     {
//         action:"approve",
//         networkId:11155111,
//         approveAmount:"64500000000000000",
//         tokenName:"usdcbalance",
//         networkName:"sepolia",
//         tokenAddres:"0x2342"            

//     },
//     {
//         action:"approve",
//         networkId:11155111,
//         approveAmount:"3440000000000000000",
//         tokenName:"daibalance",
//         networkName:"sepolia",
//         tokenAddres:"0x2342"            
//     },
//     //network switch
//     {
//         action: "switch",
//         networkId: 80001,//mumbai
//     },
//     {
//         action:"approve",
//         networkId:80001,
//         approveAmount:"64540000000000000000",
//         tokenName:"wbtcbalance",
//         networkName:"mumbaiTestnet",
//         tokenAddres:"0x2342"            
//     },
//     {
//         action:"approve",
//         networkId:80001,
//         approveAmount:"4645760000000000000000",
//         tokenName:"usdcbalance",
//         networkName:"mumbaiTestnet",
//         tokenAddres:"0x2342"            
//     },
//     {
//         action:"approve",
//         networkId:80001,
//         approveAmount:"6474000000000000000",
//         tokenName:"daibalance",
//         networkName:"mumbaiTestnet",
//         tokenAddres:"0x2342"            
//     }
//     //network switch if any


// ]



