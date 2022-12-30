import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ConcertGridItem } from '../components/grid-item'

import { client } from '../lib/client'

export const getStaticProps = async () => {
    const data = await client.get({
        endpoint: "news",
        queries: { filters: 'category[not_equals]1vocj_eon-j' }
    })
    return ({
        props: {
            data: data.contents
        }
    })
}

const Concert = ({ data }) => (
    <Layout title="演奏会情報">
        <Container>
            <Heading as="h3" fontSize={40} mb={4}>演奏会情報</Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                {data.map((post, index) => (
                    <Section>
                        <ConcertGridItem
                            id={post.category.id}
                            title={post.body}
                            thumbnail={post.thumbnail.url}
                            thumbnailurl={true}
                        >
                            {post.title}
                        </ConcertGridItem>
                    </Section>))}
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Concert