import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

// BAYC contract address
const address = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";

// Block number or height
const block = "14287507";

const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${process.env.ALCHEMY_KEY}`;
const url = `${baseURL}/getOwnersForCollection/?contractAddress=${address}&block=${block}`;

var requestOptions = {
    method: 'get',
    redirect: 'follow'
};

const response = await fetch(url, requestOptions);
const json = await response.json();

console.log({ json });