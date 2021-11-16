const {BigNumber} = require("ethers");

const {ethers} = require("hardhat");

class TestCommon {
  static async deployRng() {
    const contractFactory = await ethers.getContractFactory("RNGToken");
    const contract = await contractFactory.deploy();
    await contract.deployed();
    return contract;
  }

  static async deployMasterChef(rngContract, devAddress) {
    const contractFactory = await ethers.getContractFactory("MasterChef");
    const contract = await contractFactory.deploy(rngContract, devAddress, BigNumber.from(1), BigNumber.from(1), BigNumber.from(1));
    await contract.deployed();
    return contract;
  }
}

module.exports = {TestCommon}
