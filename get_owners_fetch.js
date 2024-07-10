import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

// BAYC contract address
const address = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";

// Block number or height
const block = "20273146";

const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${process.env.ALCHEMY_KEY}/getOwnersForCollection`;
const url = `${baseURL}/getOwnersForCollection/?contractAddress=${address}&block=${block}`;
console.log(url);


var requestOptions = {
    method: 'get',
    redirect: 'follow'
};


fetch(url, requestOptions)
    .then(response => console.log(response))
    .catch(error => console.log('error', error))