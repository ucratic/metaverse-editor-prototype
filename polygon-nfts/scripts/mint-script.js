const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("MyNFT");
  const URI = "ipfs://QmYNJxxzindLHSpTYVCgDWr62AkeFnJhJU8ySYerdToTQP"
  const WALLET_ADDRESS = "0x54DceE50e5bf892203893a88dfCc14F0af711CCf"
  const CONTRACT_ADDRESS = "0x175c90Bab186c3737e32c7EE135D3B442338d9D2"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
