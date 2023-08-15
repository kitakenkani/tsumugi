import { Container, Heading, SimpleGrid, NextLink } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { BlogGridItem } from '../../components/grid-item'

import { client } from '../../lib/client'

export const getStaticProps = async () => {
    const data = await client.get({
        endpoint: "news",
        queries: { filters: 'categories[contains]sbon5p62a' }
    })
    return ({
        props: {
            data: data.contents
        }
    })
}



const Blog = ({ data }) => {
    return (
        <Layout title="ブログ一覧">
            <Container maxW="container.lg" >
                <Heading as="h3" fontSize={40} mb={4}>記事一覧</Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={0} justifyItems="center">
                    {data.map((post, index) => (
                        <Section key={index}>
                                <BlogGridItem
                                    id={post.id}
                                    date={post.publishedAt}
                                    body={post.body}
                                    title={post.title}
                                    thumbnail={post.thumbnail.url}
                                    thumbnailurl={true}
                                />
                        </Section>))}
                </SimpleGrid>
            </Container>
        </Layout>
    )
}
export default Blog
