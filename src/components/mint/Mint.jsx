import "../mint/mint.css"
import React, { useState } from "react"
import { ethers, BigNumber } from 'ethers'
import { Box, Button, Flex, Image, Input, Text } from '@chakra-ui/react'
import one from '../../One.json'
import Toggle from "../toggle/Toggle"

const oneAddress = "0x42dcbD726e1965b6c1F7288c2dd5cD526f080a32"

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

    return (
        <Flex className="mainMint" justify="center" align="center" height="88vh" paddingBottom="50px">
            <Box width="550px">
                <Flex align="center" justify="center">
                    <Image style={{ width: "25%"}}  src={require("../../assets/pixel-kitt.png")} alt="kitt.one" />
                </Flex>
                <Flex align="center" justify="center">
                    <Text letterSpacing="-5.5%" textShadow="0 2px 2px #000000">
                        <Text fontSize="12px" fontFamily="Press Start 2P">
                            KITT: Keep IT Testing
                        </Text>
                        <Box fontFamily="VT323" fontSize="15px">
                            <Text textAlign="left" fontFamily="VT323">
                                kitt.test-log{'>'} ... consume tacos 🌮🌮🌮  
                            </Text>
                            <Text textAlign="left">
                                kitt.test-log{'>'} ... test Solidity smart contracts on the Etherum blockchain w/MetaMask 
                            </Text>
                            <Text textAlign="left">
                                kitt.test-log{'>'} ... connect to Goerli Testnet and comsume more tacos 🌮🌮🌮
                            </Text>
                        </Box>
                    </Text>
                </Flex>
                <Flex align="center" justify="center">
                    <Toggle />
                </Flex>

                {isConnected ? (
                    <div>
                        <Flex align="center" justify="center">
                            <Button 
                                backgroundColor="var(--color-primary)"
                                borderRadius="8px"
                                boxShadow="0px 2px 2px 1px var(--color-bg)"
                                cursor="pointer"
                                fontFamily="inherit"
                                fontWeight="800"
                                padding="15px"
                                marginTop="10px"
                                onClick={handleDecrement}
                            >
                                -
                            </Button>
                            <Input 
                                readOnly
                                fontFamily="inherit"
                                width="100px"
                                height="40px"
                                textAlign="center"
                                paddingLeft="18px"
                                marginTop="10px"
                                type="number"
                                borderColor="var(--color-lurp)"
                                value={mintAmount} 
                            />
                            <Button 
                                backgroundColor="var(--color-primary)"
                                borderRadius="8px"
                                boxShadow="0px 2px 2px 1px var(--color-bg)"
                                cursor="pointer"
                                fontFamily="inherit"
                                fontWeight="800"
                                padding="15px"
                                marginTop="10px"
                                onClick={handleIncrement}
                            >
                                +
                            </Button>
                        </Flex>
                        <Flex align="center" justify="center">
                            <Button 
                                backgroundColor="var(--color-neon)"
                                borderRadius="8px"
                                boxShadow="0px 2px 2px 1px var(--color-bg)"
                                cursor="pointer"
                                fontFamily="inherit"
                                fontWeight="800"
                                padding="15px"
                                marginTop="10px"
                                onClick={handleMint}
                            >
                                Test Now
                            </Button>
                        </Flex>
                        <Text
                            textAlign="center"
                            fontSize="18px"
                            letterSpacing="-5.5%"
                            marginTop="2rem"
                            textShadow="0 2px 2px #000000"
                            color="var(--color-neon)"
                        >
                            Connected - Happy Testing!!
                        </Text>
                    </div>
                ) : (
                    <div>
                        <Button 
                            backgroundColor="var(--color-primary)"
                            borderRadius="8px"
                            borderColor="var(--color-light)"
                            boxShadow="0px 2px 2px 1px var(--color-neon)"
                            cursor="pointer"
                            fontFamily="inherit"
                            textColor="var(--color-light)"
                            fontWeight="800"
                            padding="15px"
                            marginTop="10px"
                            onClick={connectAccount}
                        >
                            Test Now
                        </Button>
                        <Text
                                textAlign="center"
                                fontSize="10px"
                                letterSpacing="-5.5%"
                                marginTop="2rem"
                                textShadow="0 2px 2px #000000"
                                color="var(--color-neon)"
                            >
                                Install MetaMask to Connect
                        </Text>
                    </div>
                )}
          </Box>
        </Flex>
      );
};

export default MainMint