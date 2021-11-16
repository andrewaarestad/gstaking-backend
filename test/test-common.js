const {BigNumber} = require("ethers");

const {ethers} = require("hardhat");

class TestCommon {
  static async deployMasterChef() {
    const contractFactory = await ethers.getContractFactory("MasterChef");
    const contract = await contractFactory.deploy("MasterChef", "MasterChef");
    await contract.deployed();
    return contract;
  }
}

module.exports = {TestCommon}
