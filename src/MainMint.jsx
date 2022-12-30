import React, { useState } from "react";
import { ethers, BigNumber } from 'ethers';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import one from './One.json';

const oneAddress = "0x42dcbD726e1965b6c1F7288c2dd5cD526f080a32"; 

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
        <Flex justify="center" align="center" height="100vh" paddingBottom="100px">
            <Box width="520px">
                <div>
                    <Text fontSize="18px" textShadow="0 5px #000000">
                        kitt.one 
                    </Text>
                    <Text fontSize="48px" textShadow="0 5px #000000">
                        STANDARDmade 
                    </Text>
                    <Text fontSize="28px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px 2px #000000">
                        It's 2023. Can STANDARDmade connect to Web3 and mint
                        a bunch of NFTs? Connect to find out.
                    </Text>
                </div>
                {isConnected ? (
                    <div>
                        <Flex align="center" justify="center">
                            <Button 
                                backgroundColor="var(--color-primary)"
                                borderRadius="5px"
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
                                borderRadius="5px"
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
                                backgroundColor="var(--color-primary)"
                                borderRadius="5px"
                                boxShadow="0px 2px 2px 1px var(--color-bg)"
                                cursor="pointer"
                                fontFamily="inherit"
                                fontWeight="800"
                                padding="15px"
                                marginTop="10px"
                                onClick={handleMint}
                            >
                                Mint Now
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
                            Connected - Happy Minting!!
                        </Text>
                    </div>
                ) : (
                    <div>
                        <Button 
                            backgroundColor="var(--color-primary)"
                            borderRadius="5px"
                            boxShadow="0px 2px 2px 1px var(--color-bg)"
                            cursor="pointer"
                            fontFamily="inherit"
                            fontWeight="800"
                            padding="15px"
                            marginTop="10px"
                            onClick={connectAccount}
                        >
                            Mint Now
                        </Button>
                        <Text
                                textAlign="center"
                                fontSize="18px"
                                letterSpacing="-5.5%"
                                marginTop="2rem"
                                textShadow="0 2px 2px #000000"
                                color="var(--color-neon)"
                            >
                                You must be connected to Mint.
                        </Text>
                    </div>
                )}
          </Box>
        </Flex>
      );
};

export default MainMint