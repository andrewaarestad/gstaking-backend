// SPDX-License-Identifier: MIT
// pragma solidity 0.6.12;
pragma solidity >=0.6.0 <0.9.0;


import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract MockERC721 is ERC721 {
    uint256 public totalSupply;
    uint256 public nextTokenId = 1;

    constructor(
        string memory name,
        string memory symbol,
        uint256 _totalSupply
    ) ERC721(name, symbol) {
//        _mint(msg.sender, supply);
        totalSupply = _totalSupply;
    }


    function mint(address _to, uint256 _amount) public virtual {
//        require(publicSaleActive, "Public sale is not active");
        uint256 _nextTokenId = nextTokenId;
        require(_nextTokenId + _amount <= totalSupply + 1, 'not enough tokens available');
        for (uint256 i; i < _amount; i++) {
            _safeMint(_to, _nextTokenId);
            _nextTokenId++;
        }
        nextTokenId = _nextTokenId;
    }
}
