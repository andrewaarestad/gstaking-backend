const {TestCommon} = require("./test-common.js");
const {expect} = require("chai");
const {BigNumber} = require("ethers");

describe('MasterChef Functionality', () => {

  it('should deploy the RNG contract', async() => {
    await TestCommon.deployRng();
  });

  /*
         RNGToken _rngToken,
        address _devaddr,
        uint256 _rngPerBlock,
        uint256 _startBlock,
        uint256 _bonusEndBlock
   */
  it('should deploy the MasterChef contract', async() => {
    const rng = await TestCommon.deployRng();
    const [owner, _] = await ethers.getSigners();
    await TestCommon.deployMasterChef(rng.address, owner.address);
  });


})
