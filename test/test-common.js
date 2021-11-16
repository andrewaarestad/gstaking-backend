const {BigNumber} = require("ethers");

const {ethers} = require("hardhat");

class TestCommon {
  static async deployRng() {
    const contractFactory = await ethers.getContractFactory("RNGToken");
    const contract = await contractFactory.deploy();
    await contract.deployed();
    return contract;
  }

  static async deployMockErc721() {
    const contractFactory = await ethers.getContractFactory("MockERC721");
    const contract = await contractFactory.deploy("Mock ERC721","mNFT");
    await contract.deployed();
    return contract;
  }

  static async deployMasterChef(rngContractAddress, devAddress) {
    const contractFactory = await ethers.getContractFactory("MasterChef");
    const contract = await contractFactory.deploy(rngContractAddress, devAddress, BigNumber.from(1), BigNumber.from(1), BigNumber.from(1));
    await contract.deployed();
    return contract;
  }

  static async deployGausFarm(rngContractAddress, erc721Address) {
    const contractFactory = await ethers.getContractFactory("GausFarm");
    const contract = await contractFactory.deploy(rngContractAddress, erc721Address, BigNumber.from(1), BigNumber.from(1));
    await contract.deployed();
    return contract;
  }

  static async deployLootFarm(rngContractAddress, erc721Address) {
    const contractFactory = await ethers.getContractFactory("LootFarm");
    const contract = await contractFactory.deploy(rngContractAddress, erc721Address, BigNumber.from(1), BigNumber.from(1));
    await contract.deployed();
    return contract;
  }

  static async deployNFarm(rngContractAddress, erc721Address) {
    const contractFactory = await ethers.getContractFactory("NFarm");
    const contract = await contractFactory.deploy(rngContractAddress, erc721Address, BigNumber.from(1), BigNumber.from(1));
    await contract.deployed();
    return contract;
  }
}

module.exports = {TestCommon}
