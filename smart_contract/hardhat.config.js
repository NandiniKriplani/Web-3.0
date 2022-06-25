// https://eth-goerli.alchemyapi.io/v2/6NpC3XygFnkJYUoesT6luWutdivO5VoH

require('@nomiclabs/hardhat-waffle');

module.exports = 
{
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: ' https://eth-goerli.alchemyapi.io/v2/6NpC3XygFnkJYUoesT6luWutdivO5VoH',
      accounts: ['85aca8ed8d1de64657b0223af44f4a9f01fcf3c3234ba9579cd5c2117039a3e8']
    }
   
  }
}