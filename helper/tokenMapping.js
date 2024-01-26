
import * as dotenv from 'dotenv';
dotenv.config();




export const TokenMapping ={
    'usdcSepolia': process.env.USDC_SEPOLIA,
    'wbtcSepolia' : process.env.WBTC_SEPOLIA,
    'daiSepolia' :process.env.DAI_SEPOLIA,
    'usdcMumbai' : process.env.USDC_MUMBAI,
    'wbtcMumbai' : process.env.WBTC_MUMBAI,
    'daiMumbai' : process.env.DAI_MUMBAI

};

