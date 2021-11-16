const {TestCommon} = require("./test-common.js");
const {expect} = require("chai");
const {BigNumber} = require("ethers");

describe('MasterChef Functionality', () => {

  it('should deploy the RNG contract', async() => {
    await TestCommon.deployRng();
  });

  it('should deploy the MasterChef contract', async() => {
    const rng = await TestCommon.deployRng();
    const [owner, _] = await ethers.getSigners();
    await TestCommon.deployMasterChef(rng.address, owner.address);
  });

  it('should deploy the farms', async() => {
    const rng = await TestCommon.deployRng();
    // TODO: Replace erc721Address with deployed erc721 contract address, we are using rng.address for now which is invalid
    await TestCommon.deployGausFarm(rng.address, rng.address);
    await TestCommon.deployLootFarm(rng.address, rng.address);
    await TestCommon.deployNFarm(rng.address, rng.address);
  })


})
