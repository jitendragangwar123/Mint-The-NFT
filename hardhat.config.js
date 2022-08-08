require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      //get this url from infura.io
      url: "https://rinkeby.infura.io/v3/f4c4155e68a64eed8cd96eb9c94aa569",
      //put the private key of rinkeby network.
      accounts: [
        "f71b0769923b8edb6e60cf9bd291a7770444a82a3b634ec0790a82e4ecb3cc12",
      ],
    },
  },
};

