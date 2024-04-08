# Mock USDC Contract

This is a simple USDC mock contract that enables any user to freely mint as much of the token they like to make testing easy.

```shell
npx hardhat run scripts/deploy.js --network <network-name>
```

Then verify the contract:

```shell
npx hardhat verify DEPLOYED_CONTRACT_ADDRESS --network <network-name>
```

Refer to the hardhat.config.js for info on networks. You may need to verify via the block scanner. If so, use the flattened.sol file as the source code, select single file option and compiler version 0.8.9.
