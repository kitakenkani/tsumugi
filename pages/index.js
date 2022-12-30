import NextLink from 'next/link'
import { Container, Box, Heading, Image, Link, SimpleGrid, Flex, Tag, Text, useColorModeValue, VStack, HStack, Button, ListItem, List, Icon } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { GridItem } from "../components/grid-item"
import { IoLogoTwitter, IoTicket } from 'react-icons/io5'

import Carousel from '../components/Carousel'
import { capsFirst } from '../utils'
import { client } from '../lib/client'


export const getStaticProps = async () => {
    const data = await client.get({
        endpoint: "news",
        queries: { filters: 'category[equals]1vocj_eon-j' }
    })

    const recomend = await client.get({
        endpoint: "concertdetail",
        queries: { limit: 2 }
    })
    return {
        props: {
            data: data.contents,
            recomend: recomend.contents
        },
    };
}

const Page = ({ data, recomend }) => {

    return (
        <Container>
            <Box display={{ md: 'flex' }}

            >
                <Box flexGrow={1}
                    _before={{
                        content: '""',
                        bgImage: "/images/main.jpg",
                        bgSize: "cover",
                        pos: "absolute",
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        opacity: 0.1

                    }}
                >
                    <Heading as="h2" variant="page-title">
                        マンドリンオーケストラ紬
                    </Heading>
                    <p>Mandolin Orchestra TSUMUGI </p>
                </Box>
            </Box>
            <Carousel gap={32}>
                {data.map((post, index) => (
                    <Flex
                        key={index}
                        boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                        justifyContent="space-between"
                        flexDirection="column"
                        overflow="hidden"


                        rounded={5}
                        flex={1}
                        p={5}
                    >
                        <VStack mb={6}>
                            <Heading
                                fontSize={{ base: "xl", md: "2xl" }}
                                textAlign="left"
                                w="full"
                                mb={2}
                            >
                                {capsFirst(post.title)}
                            </Heading>
                            <Image src={post.thumbnail.url} />
                            <Text w="full">{capsFirst(post.body)}</Text>
                        </VStack>

                        <Flex justifyContent="space-between">
                            <HStack spacing={2}>
                                <Tag size="sm" colorScheme="purple">
                                    #紬2022
                                </Tag>
                            </HStack>

                        </Flex>
                    </Flex>
                ))}
            </Carousel>


            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    About us
                </Heading>
                <Paragraph>
                    メンバー内でも「袖」「軸」などとあだ名されることが多い当団体ですが、正式名称を「紬(つむぎ)」と申します。
                    この「紬」という名前には、「繭や綿から糸を引き出して織られる布」のように、それぞれのバックグラウンドや個性を引き出した上で、団体として1つの音を求めたいという思いが込められています。
                    産声を上げたばかりの当団体ですが、どうかわずかでも「紬」としての音色を感じていただけると嬉しいです。
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/concert">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                            Concert Information
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    SNS
                </Heading>
                <List mb={2}>
                    <ListItem>
                        <Link href='https://twitter.com/TumugiMO' target="_blank">
                            <Button variant="ghost" colorScheme="purple" leftIcon={<Icon as={IoLogoTwitter} />}>
                                @TumugiMO
                            </Button>
                        </Link>
                        <Link href='https://teket.jp/g/2s8sflppts' target="_blank">
                            <Button variant="ghost" colorScheme="purple" leftIcon={<Icon as={IoTicket} />}>
                                マンドリンオーケストラ紬
                            </Button>
                        </Link>
                    </ListItem>
                </List>
                <Heading as="h3" variant="section-title">
                    おすすめ
                </Heading>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    {(recomend.map((post, index) => (
                        <GridItem
                            href={post.url}
                            title={post.title}
                            thumbnail={post.thumbnail.url}
                            thumbnailurl={true}
                            key={index}
                        >
                            {post.arrange ? post.composer + "/" + post.arrange : post.composer}
                        </GridItem>
                    )))
                    }
                </SimpleGrid>
            </Section>
        </Container>
    )
}

export default Page