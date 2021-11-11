// SPDX-License-Identifier: MIT
// pragma solidity >=0.8.0 <0.9.0;
pragma solidity >=0.6.0 <0.9.0;

import '@solidstate/contracts/token/ERC20/IERC20.sol';

interface IGaus is IERC20 {
    function mint(address account, uint256 amount) external;
}