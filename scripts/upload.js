const {NFTStorage,File}=require("nft.storage");
const mime=require("mime");
const fs=require("fs");
const path=require("path");

const NFT_STORAGE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGUxYjcxYzI1NzdCYjE3ZjMxQzY2MmUzMDlFODU1NDI4MTAxRTVEOGQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1OTc5NDkwMTI1NCwibmFtZSI6ImpheSJ9.70WfRXNE7Rrqf6ziyfXzor560_gCYEv7G1KtfpGUsDk";

async function fileFromPath(filePath) {
    const content = await fs.promises.readFile(filePath);
    const type = mime.getType(filePath);
    return new File([content], path.basename(filePath), { type });
  }
  
  async function storeNFT(imagePath, name, description) {
    const image = await fileFromPath(imagePath);
    const nftStorage = new NFTStorage({ token: NFT_STORAGE_KEY });
  
    return nftStorage.store({ image, name, description });
  }
  
  async function main(imagePath, name, description) {
    return await storeNFT(imagePath, name, description);
  }
  
  if (require.main === module) {
    try {
      main("HostelFriends.jpeg", "Hostel-G Friends NFT", "Ye Number One Yaari Hai");
    } catch (err) {
      console.log("Error while Creating the NFT", err);
    }
  }
  
  module.exports = main;