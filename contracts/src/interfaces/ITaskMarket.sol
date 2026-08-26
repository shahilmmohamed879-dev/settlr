// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface ITaskMarket {
    function postTask(uint256 _budget, string calldata _srsHash) external returns (uint256);
    function submitBid(uint256 _taskId) external;
    function selectWinner(uint256 _taskId, address _freelancer) external;
    function getWinner(uint256 _taskId) external view returns (address);
    function getBidders(uint256 _taskId) external view returns (address[] memory);
}