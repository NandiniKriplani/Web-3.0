// https://eth-goerli.alchemyapi.io/v2/6NpC3XygFnkJYUoesT6luWutdivO5VoH

require('@nomiclabs/hardhat-waffle');

module.exports = 
{
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: ' https://eth-goerli.alchemyapi.io/v2/6NpC3XygFnkJYUoesT6luWutdivO5VoH',
      accounts: ['']
    }
   
  }
}
