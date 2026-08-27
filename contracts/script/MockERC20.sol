// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @dev Mock ERC20 token for testing purposes
 * Allows minting tokens to any address for testing scenarios
 */
contract MockERC20 is ERC20, Ownable {
    uint8 private _decimals;

    constructor(string memory name, string memory symbol, uint8 decimals_) 
        ERC20(name, symbol) 
        Ownable(msg.sender) 
    {
        _decimals = decimals_;
    }

    /**
     * @dev Mint tokens to a specified address
     * Only callable by the owner
     */
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    /**
     * @dev Override decimals to return our custom value
     */
    function decimals() public view override returns (uint8) {
        return _decimals;
    }
}
