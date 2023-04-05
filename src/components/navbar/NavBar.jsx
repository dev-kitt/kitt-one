import "../navbar/navbar.css"
import React from "react"
import { Box, Button, Flex, Hide, Image, Link } from '@chakra-ui/react'
import LLC from '../../assets/social-media-icons/kitt-made.png'
import Plus from '../../assets/social-media-icons/kitt-plus.png'
import Hub from '../../assets/social-media-icons/kitt-hub.png'
// import Pro from '../../assets/social-media-icons/kitt-pro.png'
// import Games from '../../assets/social-media-icons/kitt-games.png'
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
                <Image src={Kitt} boxSize="100px" width="100px" height="100px" title="Kitt.One" />
                <Link href="https://kitt.llc">
                    <Image src={LLC} boxSize="42px" margin="0 15px" title="Kitt.LLC" />
                </Link>
                <Link href="https://kitt.plus">
                    <Image src={Plus} boxSize="42px" margin="0 15px" title="Kitt.Plus" />
                </Link>
                <Link href="https://github.com/standard-made"> 
                    <Image src={Hub} boxSize="42px" margin="0 15px" title="KittHub.Com" />
                </Link>
                {/* <Link href="https://kitt.pro">
                    <Image src={Pro} boxSize="42px" margin="0 15px" title="Kitt.Pro" />
                </Link>
                <Link href="https://kitt.games">
                    <Image src={Games} boxSize="42px" margin="0 15px" title="Kitt.Games" />
                </Link>                */}             
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