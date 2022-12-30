import NextLink  from "next/link"
import {
    Box,
    Heading,
    Container,
    Divider,
    Button, 
    SimpleGrid
} from '@chakra-ui/react'
import Section from '../../components/section'
import { GridItem } from '../../components/grid-item'
import { client } from '../../lib/client'

export const getStaticProps = async (context) => {
    const id = context.params.id
    const data = await client.get({
        endpoint: "concertdetail",
        queries: { filters: `category[equals]${id}` }
    })

    return (
        {
            props: {
                data: data?.contents || null
            }
        }
    )
}

export const getStaticPaths = async () => {
    const data = await client.get({
        endpoint: 'categories',
        queries: { filters: 'id[not_equals]1vocj_eon-j' }

    })

    const paths = data.contents.map((content) => `/concert/${content.id}`)
    return {
        paths,
        fallback: false
    }
}

const Concert = ({ data }) => {


    const first = data.filter(d => d.section[0] === '１部')
    first.sort((a, b) => a.order - b.order)
    const second = data.filter(d => d.section[0] === '２部')
    second.sort((a, b) => a.order - b.order)
    const third = data.filter(d => d.section[0] === '３部')
    third.sort(((a, b) => a.order - b.order))
    const concertData = [first, second, third]
    
    return (
        <div>
            {data.length !== 0 ? (
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        {data[0].category.name}
                    </Heading>
                    {concertData.map((post, index) => (<>
                        <Heading as="h4" variant="section-title">
                            第{index + 1}部
                        </Heading>
                        <SimpleGrid key={index} columns={[1, 2, 2]} gap={6}>
                            {post.map((info, sectionNumber) => (
                                <GridItem
                                    key={sectionNumber}
                                    href={info.url}
                                    title={info.title}
                                    thumbnail={info.thumbnail.url}
                                    thumbnailurl={true}
                                >
                                    {info.arrange ? info.composer + "/" + info.arrange : info.composer}
                                </GridItem>
                            ))}
                        </SimpleGrid>
                    </>))}
                </Section>
            ) : (
                <Container>
                    <Heading as="h1"> Coming Soon</Heading>
                    <Divider />
                    <Box my={6} align="center">
                        <NextLink href="/" passHref>
                            <Button colorScheme="purple"> Return to home</Button>
                        </NextLink>
                    </Box>
                </Container>
            )}
        </div>
    )
}

export default Concert