import "../navbar/navbar.css"
import React from "react"
import { Box, Button, Flex, Hide, Image, Link } from '@chakra-ui/react'
import GitHub from '../../assets/social-media-icons/github.png'
import Made from '../../assets/social-media-icons/made.png'
import Scratch from '../../assets/social-media-icons/scratch.png'
import LinkedIn from '../../assets/social-media-icons/linkedin.png'
import Kitt from "../../assets/kitt-one.png"

const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0])

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts)
        }
    }

    return (
        <Flex className="n-wrapper" id="home">
            {/* left */}
            <Flex id="top" className="n-left">
                <Image src={Kitt} boxSize="100px" width="100px" height="100px" title="kitt" />
                <Link href="https://github.com/standard-made/">
                    <Image src={GitHub} boxSize="42px" margin="0 15px" title="github" />
                </Link>
                <Link href="https://made.llc/">
                    <Image src={Made} boxSize="42px" margin="0 15px" title="standard made" />
                </Link>
                <Link href="https://scratch.mit.edu/projects/385458190/">
                    <Image src={Scratch} boxSize="42px" margin="0 15px" title="stale tacos" />
                </Link>
                <Link href="https://www.linkedin.com/in/qakit/">
                    <Image src={LinkedIn} boxSize="42px" margin="0 15px" title="linkedin" />
                </Link>               
                
            </Flex>
            
            {/* right */}
            <Flex className="n-right">
                
                {/* Connect */} 
                <Hide breakpoint='(max-width: 824px)'>
                    {isConnected ? (
                        <Box margin="0 15px">Connected</Box>
                    ) : (
                        <Button 
                            className="navBar__btn"
                            backgroundColor="var(--color-primary)"
                            borderRadius="8px"
                            borderColor="var(--color-light)"
                            boxShadow="0px 2px 2px 1px var(--color-neon)"
                            cursor="pointer"
                            fontFamily="inherit"
                            textColor="var(--color-light)"
                            padding="15px"
                            margin="0 15px"
                            onClick={connectAccount}>Connect</Button>
                    )}
                </Hide>
            </Flex>
        </Flex>
    )
}

export default NavBar