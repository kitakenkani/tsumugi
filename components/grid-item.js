import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail, thumbnailurl }) => (
    <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
            <Image
                src={thumbnail}
                alt={title}
                className="grid-item-thumnail"
                placeholder={thumbnailurl? "" : "blur"}
                loading="lazy"
                height={ thumbnailurl? "180": ""}
                width={ thumbnailurl? "320": ""}
            />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const ConcertGridItem = ({ children, id, title, thumbnail, thumbnailurl }) => (
    <Box W="100%" textAlign="center">
        <NextLink href={`/concert/${id}`} passHref scroll={false}>
            <LinkBox cursor="pointer">
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder={ thumbnailurl? "":"blur" }
                    height={ thumbnailurl? "842px": ""}
                    width={ thumbnailurl? "595px": ""}
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