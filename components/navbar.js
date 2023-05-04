import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
const LinkItem = ({ href, path, children }) => {
    const active = path.includes(href)
    const inactivaColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <NextLink href={href}>
            <Link p={2}
                bg={active ? 'glassTeal' : undefined}
                color={active ? '#202023' : inactivaColor}>
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props
    return (
        <Box position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '20202380')}
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={2}
            {...props}
        >
            <Container display="flex"
                p={2}
                maxW="container.full"
                wrap="wrap"
                align="center"
                justify="space-between" >
                <Flex align="center" mt={2} mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base: 'column', md: 'row', }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                >
                    <LinkItem href="/concert" path={path}>
                        Concerts
                    </LinkItem>
                    <LinkItem href="/blog" path={path}>
                        Blog
                    </LinkItem>
                    
                    <a href="https://teket.jp/g/2s8sflppts" target="_blank">
                        Tickets
                    </a>
                </Stack>
                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label='Options' />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>
                                <NextLink href="/concert" passHref>
                                    <MenuItem as={Link}>Concerts</MenuItem>
                                </NextLink>
                                <NextLink href="/blog" passHref>
                                    <MenuItem as={Link}>Blog</MenuItem>
                                </NextLink>
                                <MenuItem as={Link} href="https://teket.jp/g/2s8sflppts" isExternal>Tickets</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>

        </Box>
    )
}
export default Navbar
