var WasHere = artifacts.require('WhoWasAtUCIBlockathonOct2018');

contract('WhoWasAtUCIBlockathonOct2018', async(accounts) => {

  it("deploys", async() => {
    const wasHereInstance = await WasHere.deployed();
    assert.isOk(wasHereInstance);
  });


  it("lets us write a name to the blockchain", async() => {
    const wasHereInstance = await WasHere.deployed();

    const tx = await wasHereInstance.recordName.sendTransaction(
      "michael",
      {from: accounts[0]}
    );

    assert.isOk(tx);
    console.log("from:", accounts[0]);
    console.log("tx:", tx);

    const recordedName = await wasHereInstance.names(0);

    assert.equal("michael", recordedName);

    console.log("recordedName", recordedName);

    const index = await wasHereInstance.index();
    assert.equal(1, index);


  });

})
