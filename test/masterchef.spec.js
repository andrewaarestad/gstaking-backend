const {TestCommon} = require("./test-common.js");
const {expect} = require("chai");

describe('MasterChef Functionality', () => {

  it('should deploy the MasterChef contract', async() => {
    await TestCommon.deployMasterChef();
  });


})
