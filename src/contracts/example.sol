// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

contract Contract{
    uint256 public number;
    string public str;
    uint256[] data;

    function setNumber(uint256 _number) public{
        number = _number;
    }

    function setStr(string memory _str) public{
        str = _str;
    }

    function setData(uint256 a) public{
        data.push(a);
    }

    function getData() public view returns(uint256[] memory){
        return data;
    }
}