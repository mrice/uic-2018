pragma solidity ^0.4.24;

contract WhoWasAtUCIBlockathonOct2018 {

  string[150] public names;
  uint public index = 0;

  function recordName(string name)
    public
  {
    names[index] = name;
    index++;
  }



}
