// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IEscrow {
    function deposit(uint256 _amount) external payable;
    function proposeSettlement(uint256 _amount, address _beneficiary) external;
    function release(uint256 _ruling) external;
}

