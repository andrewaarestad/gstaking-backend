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
    const mockErc721 = await TestCommon.deployMockErc721();
    await TestCommon.deployGausFarm(rng.address, mockErc721.address);
    await TestCommon.deployLootFarm(rng.address, mockErc721.address);
    await TestCommon.deployNFarm(rng.address, mockErc721.address);
  })


})
