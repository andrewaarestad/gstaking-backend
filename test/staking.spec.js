const {TestCommon} = require("./test-common.js");
const {expect} = require("chai");


describe('Staking', () => {
  it('should allow staking and withdrawing in the GausFarm', async() => {


    const rng = await TestCommon.deployRng();
    const mockErc721 = await TestCommon.deployMockErc721();
    const gausFarm = await TestCommon.deployGausFarm(rng.address, mockErc721.address);

    // Mint a mockErc721
    const [owner, testAccount, _] = await ethers.getSigners();
    await mockErc721.connect(testAccount).mint(testAccount.address, 1);

    const ownerOfResult = await mockErc721.connect(testAccount).ownerOf(1);
    expect(ownerOfResult).to.equal(testAccount.address);

    // Approve farm to transfer mockErc721 tokenId 1
    await mockErc721.connect(testAccount).approve(gausFarm.address, 1);

    // Stake it
    await gausFarm.connect(testAccount).deposit([1]);

    // Withdraw it
    await gausFarm.connect(testAccount).withdraw([1]);

  })
})
