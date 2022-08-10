# Mint The NFT Using Hardhat

This project demonstrates a basic Hardhat use case like Mint the NFT. It comes with a sample ERC721 contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
Export from VSCode to github Repository:
```shell
git config --global user.name "jitendragangwar123"
git config --global user.email "gangwarjitendra2498@gmail.com"
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/jitendragangwar123/Mint_The_NFT.git
git push -u origin main
git push -f origin main //forcefully push on github repository

```

Depoying this project by using these commands:

```shell 
npm init -y    //Create the .json file.
npm install --save-dev hardhat // Install the Hardhat setup 
npm install nft.storage   // Store the NFT Image and Metadata on IPFS
npm install mime  // Store the NFT Image and Metadata on IPFS
npx hardhat //Start the Hardhat
npx hardhat compile  //Compile the Smart Contract
npx hardhat run scripts/deploy.js --network rinkeby //Deploy the Smart Contract
```


