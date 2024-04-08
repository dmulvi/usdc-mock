require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");

dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "amoy",
  networks: {
    arbitrum: {
      url: process.env.ARBITRUM_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    optimism: {
      url: process.env.OPTIMISM_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    amoy: {
      url: process.env.AMOY_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    bsc: {
      url: process.env.BSC_TESTNET_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    basetest: {
      url: process.env.BASE_TESTNET_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    matic: {
      url: process.env.MATIC_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    zkatana: {
      url: process.env.ZKATANA_TESTNET_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    ganache: {
      url: "http://127.0.0.1:7545",
      chainId: 5777,
    },
    hardhat: {
      chainId: 31337,
    },
  },
  etherscan: {
    apiKey: {
      goerli: process.env.ETHERSCAN_KEY,
      sepolia: process.env.ETHERSCAN_KEY,
      arbitrumGoerli: process.env.ARBISCAN_KEY,
      optimisticGoerli: process.env.OPTIMISM_KEY,
      basetest: process.env.BASESCAN_KEY,
      polygonAmoy: process.env.POLYGONSCAN_KEY,
    },
    // customChains: [
    //   {
    //     network: "basetest",
    //     chainId: 84532,
    //     urls: {
    //       apiURL: "https://api-goerli.basescan.org/",
    //       browserURL: "https://goerli.basescan.org/",
    //     },
    //     apiKey: process.env.BASESCAN_KEY,
    //   },
    // ],
  },
};
