
import { RESPONSES,RES_MSG } from '../common/response.js';
import {getDetails} from '../helper/helper.js';
import {TokenMapping} from '../helper/tokenMapping.js';
import * as dotenv from 'dotenv';
dotenv.config();


export async function getUserDetails(req,res){
  try{
    const publicKey = req.params.publicKey;
    const result = await getDetails(publicKey);
    const actions = await transformDetailsToActions(result);
   return res.status(RESPONSES.SUCCESS).send({
      status: RESPONSES.SUCCESS,
      message: RES_MSG.TRANSACTION_DONE,
      data: actions,
    });
  }catch(error){
    return res.status(RESPONSES.INTERNALSERVER).send({
      status : RESPONSES.INTERNALSERVER,
      message : RES_MSG.TRANSACTION_FAILED,
      error: true
  })
  }
}


async function transformDetailsToActions(details) {
  const actions = [];

  details.forEach((networkDetails) => {

   
    actions.push({
      action: "switch",
      networkId: networkDetails.networkId,
    });

    Object.keys(networkDetails).forEach((tokenName) => {
      if (tokenName !== "networkId") {
        actions.push({
          action: "approve",
          networkId: networkDetails.networkId,
          approveAmount: networkDetails[tokenName],
          tokenName: tokenName,
          networkName: networkDetails.networkName,
          tokenAddress: TokenMapping[tokenName], 
        });
      }
    });
  });

  return actions;
}


