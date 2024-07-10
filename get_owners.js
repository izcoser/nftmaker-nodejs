import dotenv from 'dotenv';
import { Alchemy, Network } from "alchemy-sdk";

dotenv.config();

const config = {
    apiKey: process.env.ALCHEMY_KEY,
    network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

const main = async () => {

    // BAYC contract address
    const address = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";

    // Block number or height
    const block = "1";

    // Get owners 
    const owners = await alchemy.nft.getOwnersForContract(address, { block: block });
    console.log(owners);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();