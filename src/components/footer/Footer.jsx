import React from 'react'
import './footer.css'
import GitHub from '../../assets/social-media-icons/github.png'
import Made from '../../assets/social-media-icons/made.png'
import Scratch from '../../assets/social-media-icons/scratch.png'
import LinkedIn from '../../assets/social-media-icons/linkedin.png'
import { Flex, Image, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        {/* center */}
        <Flex className="navBar" justify="space-between" align="center" padding="35px">
            <Link href="https://github.com/standard-made/">
                <Image src={GitHub} boxSize="42px" margin="0 15px" />
            </Link>
            <Link href="https://made.llc/">
                <Image src={Made} boxSize="42px" margin="0 15px" />
            </Link>
            <Link href="https://scratch.mit.edu/projects/385458190/">
                <Image src={Scratch} boxSize="42px" margin="0 15px" />
            </Link>
            <Link href="https://www.linkedin.com/in/qakit/">
                <Image src={LinkedIn} boxSize="42px" margin="0 15px" />
            </Link>
        </Flex>
      </div>
    </footer>
  )
}

export default Footer