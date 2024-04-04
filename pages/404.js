import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { IoLogoTwitter } from 'react-icons/io5'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button
} from '@chakra-ui/react'

const NotFound = () => {
    const router = useRouter()
    
    if (router.asPath.startsWith("/concert")){
        return (
            <Container>
                <Heading as="h1">Not Found</Heading>
                <Text>演奏会情報が見つかりませんでした</Text>
                <Divider />
                <Box my={6} align="center">
                    <Text my={6}>最新の演奏会情報はTwitterでチェックしてください。</Text>
                    <NextLink href="https://twitter.com/tumugiMO" passHref>
                        <Button as="a" target="_blank" leftIcon={<IoLogoTwitter />}>
                            @tumugiMOをフォローする
                        </Button>
                    </NextLink>
                </Box>
            </Container>
        )
    }

    return (
        <Container>
            <Heading as="h1"> Not Found</Heading>
            <Text> The page you&apos;re looking for was not found.</Text>
            <Divider />
            <Box my={6} align="center">
                <NextLink href="/" passHref>
                    <Button colorScheme="purple"> Return to home</Button>
                </NextLink>
            </Box>
        </Container>
    )
}


export default NotFound