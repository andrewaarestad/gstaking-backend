const {TestCommon} = require("./test-common.js");
const {expect} = require("chai");


describe('Earning', () => {
  it('should allow checking earned balance', async() => {


    const [owner, testAccount, _] = await ethers.getSigners();
    const rng = await TestCommon.deployRng();
    const masterChef = await TestCommon.deployMasterChef(rng.address, owner.address);

    // Check balance
    const result = await masterChef.connect(testAccount).pendingRng(0, testAccount.address);
    console.log('result', result);

  })
})
