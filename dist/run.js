"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { utils } = require("ethers");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const baseTokenURI = "ipfs://QmXuab4tWstNaz4JQcsFT8nAGNA85GZMw3SfsiRGJ4d3FW/"; //--> здесь будет METADATA JSON нфт изображений, адрес с pinata
        // Get owner/deployer's wallet address
        const [owner] = yield hre.ethers.getSigners();
        // Get contract that we want to deploy
        const contractFactory = yield hre.ethers.getContractFactory("Doggy");
        // Deploy contract with the correct constructor arguments
        const contract = yield contractFactory.deploy(baseTokenURI);
        // Wait for this transaction to be mined
        yield contract.deployed();
        // Get contract address
        console.log("Contract deployed to:", contract.address);
        // Reserve NFTs
        let txn = yield contract.reserveNFTs(); //reserveNFTs
        yield txn.wait();
        console.log("10 NFTs have been reserved");
        // Mint 3 NFTs by sending 0.03 ether
        txn = yield contract.mintNFTs(3, { value: utils.parseEther('0.03') });
        yield txn.wait();
        // Get all token IDs of the owner
        let tokens = yield contract.tokensOfOwner(owner.address);
        console.log("Owner has tokens: ", tokens);
    });
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});
/*
const hre = require("hardhat");

async function main() {

  const contractFactory = await hre.ethers.getContractFactory("Darth");
  const darth = await contractFactory.deploy();

  await darth.deployed();

  console.log("My NFT deployed to:", darth.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

*/
/*
const { utils } = require("ethers");

async function main() {
    const baseTokenURI = "ipfs://QmbXtrzPhwsB4iEqMvrykRJLoJGJZPia6gDkyT7A1GB54Y/";  //--> здесь будет METADATA JSON нфт изображений, адрес с pinata

    // Get owner/deployer's wallet address
    const [owner] = await hre.ethers.getSigners();

    // Get contract that we want to deploy
    const contractFactory = await hre.ethers.getContractFactory("Vader"); //--> название контракта class solidity

    // Deploy contract with the correct constructor arguments
    const contract = await contractFactory.deploy(baseTokenURI);

    // Wait for this transaction to be mined
    await contract.deployed();

    // Get contract address
    console.log("Contract deployed to:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
});
*/
