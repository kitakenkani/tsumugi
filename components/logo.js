import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;
`
const Logo = () => {
    const logoImg = `/images/logo${useColorModeValue('', '-dark')}.svg`
    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={logoImg} width={40} height={40} alt="logo" />
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo