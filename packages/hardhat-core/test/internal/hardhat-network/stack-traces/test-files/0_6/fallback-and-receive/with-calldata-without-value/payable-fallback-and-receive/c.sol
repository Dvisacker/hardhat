pragma solidity ^0.6.0;

contract C {

  fallback () external payable {
    revert('fallback failed');
  }

  receive () external payable {
    revert('receive failed');
  }

}

