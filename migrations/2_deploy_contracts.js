const SushiToken = artifacts.require('SushiToken')
const MasterChef = artifacts.require('MasterChef')
const GaussFarm = artifacts.require('GaussFarm')
const LootFarm = artifacts.require('LootFarm')
const NFarm = artifacts.require('NFarm')

module.exports = async function(deployer) {
  // Deploy Sushi Token
  await deployer.deploy(SushiToken)
  const sushiToken = await SushiToken.deployed()

  // Deploy Masterchef Contract
  await deployer.deploy(
    MasterChef,
    sushiToken.address,
    process.env.DEV_ADDRESS, // Your address where you get sushi tokens - should be a multisig
    web3.utils.toWei(process.env.TOKENS_PER_BLOCK), // Number of tokens rewarded per block, e.g., 100
    process.env.START_BLOCK, // Block number when token mining starts
    process.env.BONUS_END_BLOCK // Block when bonus ends
  )

  // Make Masterchef contract token owner
  const masterChef = await MasterChef.deployed()
  await sushiToken.transferOwnership(masterChef.address)

    // Deploy GaussFarm
    await deployer.deploy(GaussFarm)
    const gaussFarm = await GaussFarm.deployed()
  
    // Deploy LootFarm
    await deployer.deploy(LootFarm)
    const lootFarm = await LootFarm.deployed()
  
    // Deploy NFarm
    await deployer.deploy(NFarm)
    const nFarm = await NFarm.deployed()

  // Add Liquidity pool for rewards, e.g., "ETH/DAI Pool"
  await masterChef.add(
    process.env.ALLOCATION_POINT,
    process.env.LP_TOKEN_ADDRESS,
    false
  )

  // Add more liquidity pools here upon deployment, or add them later manually
}
