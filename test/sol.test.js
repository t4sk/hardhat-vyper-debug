const { expect } = require("chai")
const hre = require("hardhat")

it("test solidity debug", async () => {
  const TestSol = await hre.ethers.getContractFactory("TestSol")
  const test = await TestSol.deploy()

  await test.test()
})
