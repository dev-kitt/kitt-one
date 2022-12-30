const hre = require("hardhat");

async function main() {
  const STANDARDmade = await hre.ethers.getContractFactory("STANDARDmade");
  const sandardMade = await STANDARDmade.deploy();

  await sandardMade.deployed();

  console.log("STANDARDmade deployed to:", sandardMade.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
