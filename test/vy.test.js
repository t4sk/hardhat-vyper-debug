const { expect } = require("chai")
const hre = require("hardhat")

it("test Vyper debug", async () => {
  const TestVy = await hre.ethers.getContractFactory("TestVy")
  const test = await TestVy.deploy()

  await test.test()
})
