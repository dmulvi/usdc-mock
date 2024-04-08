const hre = require("hardhat");

async function main() {
  const USDC = await hre.ethers.getContractFactory("USDCoin");
  const usdc = await USDC.deploy("USD Coin", "USDC");

  await usdc.deployed();

  console.log(`Mock USDC contract deployed to ${usdc.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
