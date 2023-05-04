import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Flex, Stack, Heading, Avatar, useColorModeValue } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import formatDate from '../utils/formatDate'

export const GridItem = ({ children, href, title, thumbnail, thumbnailurl }) => (
    <Box width="100%" textAlign="center">
        <LinkBox cursor="pointer">
            <Image
                src={thumbnail}
                alt={title}
                className="grid-item-thumnail"
                placeholder={thumbnailurl ? "" : "blur"}
                loading="lazy"
                height={thumbnailurl ? "180" : ""}
                width={thumbnailurl ? "320" : ""}
            />
            <LinkOverlay href={href} >
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const ConcertGridItem = ({ children, id, title, thumbnail, thumbnailurl }) => (
    <Box width="100%" textAlign="center">
        <NextLink href={`/concert/${id}`} passHref scroll={false}>
            <LinkBox cursor="pointer">
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder={thumbnailurl ? "" : "blur"}
                    height={thumbnailurl ? "842px" : ""}
                    width={thumbnailurl ? "595px" : ""}
                />
                <LinkOverlay href={`/concert/${id}`}>
                    <Text mt={2} fontSize={20}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </NextLink>
    </Box>
)

export const GridItemStyle = () => (
    <Global
        styles={`
            .grid-item-thumbnail{
                border-radius: 12px;
            }
        `}
    />
)

export const BlogGridItem = ({ id, title, body, thumbnail, thumbnailurl, date }) => {
    const boxShadow = useColorModeValue("xl", "0 0 20px rgba(100, 100, 100, 0.5)");
    return (

        <Flex p="6" w="full" maxW="350px">
            <NextLink href={`/blog/${id}`} passHref scroll>
                <LinkBox cursor="pointer">
                    <Box boxShadow={boxShadow} rounded="xl" p="6" overflow="hidden"  >
                        <Box h="200px" mt="-6" mx="-6" pos="relative">
                            <Image
                                src={thumbnail}
                                alt={title}
                                placeholder={thumbnailurl ? "" : "blur"}
                                height={thumbnailurl ? "210px" : ""}
                                width={thumbnailurl ? "350px" : ""}
                                objectFit="cover"
                                
                            />
                        </Box>
                        <Stack>
                            <Text
                                color="blue.200"
                                fontWeight="800"
                                fontSize="xs"
                                letterSpacing="wide"
                            >
                                Blog
                            </Text>
                            <Heading fontSize="lg" >
                                {title}
                            </Heading>
                            <LinkOverlay href={`/blog/${id}`} target="_blank">
                                <Text fontSize="sm">{body.slice(0, 50)}...</Text>
                            </LinkOverlay>
                        </Stack>
                        <Stack mt="6" direction="row" spacing="4" align="center" borderTop="1px solid #525252">
                            
                            <Stack direction="column" spacing="0" fontSize="sm" mt={1}>
                                <Text fontWeight="600">公開日</Text>
                                <Text color="gray.500">{formatDate(date)}</Text>
                            </Stack>
                        </Stack>
                    </Box>
                </LinkBox>
            </NextLink>
        </Flex>

    )
}