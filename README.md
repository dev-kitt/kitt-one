**<h1> kitt.one | web3</h1>**
![kitt-made-logo](/src/assets/kitt-readme.png "Made, LLC")



## <span style="color:#555555"><u> **OVERVIEW** </u></span>
[kitt.one](https://kitt.one) [`Web3 NFT Minting App`]
by Made, LLC
- Portfolio & Playground
  - Web3 Stuff
  - DevOps Stuff
  - :taco: Stuff


## <span style="color:#555555"><u> **POINTS OF CONTACT** </u></span>
If any issues arise for any of the below mentioned areas, please draft a strongly worded email and never send it to: **kitt@made.llc** 



## <span style="color:#555555"><u> **CORE SOLUTIONS** </u></span>
| Stack  | Versions |
| ------------- |:-------------:|
| React.js | 18.1.0 |
| Node.js | 16.15.0 |
| OpenZeppelin | 4.6.0 |
| Crypto-Browserify | 3.12.0 |
| Stream | 3.0.0 |
| Hardhat | 2.9.3 |
| -etherscan | ^ |
| -waffle | ^ |
| MetaMask | 1.2.0 |
| Solidity | 0.8.4 |
| Goerli/Sepolia | Test Network |



## <span style="color:#555555"><u> **CORE DEVELPOMENT** </u></span>
**kitt.one |** by Made, LLC + :taco::taco::taco:


``` js
// MINT NFTS [js]
const oneAddress = "<goerli/sepolia test wallet>";

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
               oneAddress,
               one.abi,
               signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.888 * mintAmount).toString()),
                })
                console.log('response: ', response)
            } catch (err) {
                console.log('error: ', err)
            }
        }
    }

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            })
            setAccounts(accounts)
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    }

    const handleIncrement = () => {
        if (mintAmount >= 8) return;
        setMintAmount(mintAmount + 1);
    }
};
```


### <span style="color:#A6A6A6"> CONTRACT </span>
Here's my Solidity Contract...read the fine print :wink:

<details>
  <summary><span style="color:mediumpurple"> CLICK TO EXPAND </span></summary>

``` js
pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

// Made.sol SMART Contract
contract Made is ERC721, Ownable {
	uint256 public mintPrice;
	uint256 public totalSupply;
	uint256 public maxSupply;
	uint256 public maxPerWallet;
	bool public isPublicMintEnabled;
	string internal baseTokenUri;
	address payable public withdrawWallet;
	mapping(address => uint256) public walletMints;
	
	constructor() payable ERC721('Made', 'MADE') { 
		mintPrice = 0.8888 ether;
		totalSupply = 0;
		maxSupply = 888;
		maxPerWallet = 8;
		// withdrawWallet = kITt Address
	}	

	function setIsPublicMintEnabled(bool isPublicMintEnabled_) external onlyOwner {
			isPublicMintEnabled = isPublicMintEnabled_;
	}
	
	function setBaseTokenUri(string calldata baseTokenUri_) external onlyOwner {
		baseTokenUri = baseTokenUri_;
	}
	
	function tokenURI(uint256 tokenId_) public view override returns (string memory) {
		require(_exists(tokenId_), 'Token does not exist!');
		return string(abi.encodePacked(baseTokenUri, Strings.toString(tokenId_), ".json"));
	}
	
	function withdraw() external onlyOwner {
		(bool success, ) = withdrawWallet.call{ value: address(this).balance }('');
		require(success, 'withdraw failed');
	}
	
	// **MINT**
	function mint(uint256 quantity_) public payable {
		require(isPublicMintEnabled, 'minting not enabled');
		require(msg.value == quantity_ * mintPrice, 'wrong mint value');
		require(totalSupply + quantity_ <= maxSupply, 'sold out');
		require(walletMints[msg.sender] + quantity_ <= maxPerWallet, 'exceed max wallet');
		
		for (uint256 i = 0; i < quantity_; i++) {
			uint256 newTokenId = totalSupply + 1;
			totalSupply++;
			_safeMint(msg.sender, newTokenId);
		}
	}
}
```
:taco::taco::taco:
</details>