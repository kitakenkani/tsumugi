import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { ConcertGridItem } from '../../components/grid-item'

import { client } from '../../lib/client'

export const getStaticProps = async () => {
    const data = await client.get({
        endpoint: "news",
        queries: { filters: 'category[equals]97yg6yyc-7b[or]category[equals]tb6jxxz6fz1n' }
    })
    return ({
        props: {
            data: data.contents
        }
    })
}

const Concert = ({ data }) => (
    <Layout title="演奏会情報">
        <Container maxW="container.lg">
            <Heading as="h3" fontSize={40} mb={4}>演奏会情報</Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                {data.map((post, index) => (
                    <Section key={index}>
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
