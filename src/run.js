const { utils } = require("ethers");

async function main() {
    const baseTokenURI = "ipfs://QmXuab4tWstNaz4JQcsFT8nAGNA85GZMw3SfsiRGJ4d3FW/"; //--> здесь будет METADATA JSON нфт изображений, адрес с pinata

    // Get owner/deployer's wallet address
    const [owner] = await hre.ethers.getSigners();

    // Get contract that we want to deploy
    const contractFactory = await hre.ethers.getContractFactory("Doggy");

    // Deploy contract with the correct constructor arguments
    const contract = await contractFactory.deploy(baseTokenURI);

    // Wait for this transaction to be mined
    await contract.deployed();

    // Get contract address
    console.log("Contract deployed to:", contract.address);

    // Reserve NFTs
    let txn = await contract.reserveNFTs(); //reserveNFTs
    await txn.wait();
    console.log("10 NFTs have been reserved");

    // Mint 3 NFTs by sending 0.03 ether
    txn = await contract.mintNFTs(3, { value: utils.parseEther('0.03') });
    await txn.wait()

    // Get all token IDs of the owner
    let tokens = await contract.tokensOfOwner(owner.address)
    console.log("Owner has tokens: ", tokens);

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
