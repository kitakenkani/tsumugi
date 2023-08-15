import Head from "next/head"
import { Container, Box, Badge, Heading, Image, Link, Text, ListItem, OrderedList, UnorderedList, HStack, VStack } from "@chakra-ui/react"
import { CalendarIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from "../../components/layouts/article";
import { client } from "../../lib/client";
import parse, { domToReact } from 'html-react-parser';
import formatDate from "../../utils/formatDate";
import ShareButtons from "../../components/shareButtons";



export const getStaticProps = async (context) => {
    const id = context.params.id
    const data = await client.get({
        endpoint: "news",
        queries: { filters: `id[equals]${id}` }
    })
    return (
        {
            props: {
                data: data.contents
            }
        }
    )
}
export const getStaticPaths = async () => {
    const data = await client.get({
        endpoint: "news",
        queries: { filters: "categories[contains]sbon5p62a" }
    })
    const paths = data.contents.map((content) => `/blog/${content.id}`)
    return {
        paths,
        fallback: false
    }
}

const h1 = {
    props: {
        mt: "24px",
        mb: "16px",
        lineHeight: "1.25",
        fontWeight: "600",
        pb: ".3em",
        fontSize: "2em",
        borderBottom: "4px solid #525252",
        display: "inline-block",
    },
};

const h2 = {
    props: {
        mt: "24px",
        mb: "16px",
        lineHeight: "1.25",
        fontWeight: "600",
        pb: ".3em",
        fontSize: "1.5em",
        borderBottom: "4px solid #525252",
        display: "inline-block",
    },
};

const h3 = {
    props: {
        mt: "24px",
        mb: "16px",
        lineHeight: "1.25",
        fontWeight: "600",
        fontSize: "1.25em",
    },
};

const p = {
    props: {
        lineheight: "1.8",
        mb: "10px",
        fontSize: "18px",
        color: "##000",
    },
};


const ul = {
    props: {
        my: "1",
        lineHeight: "2",
        pl: "1em"
    },
};

const ol = {
    props: {
        my: "1",
        lineHeight: "2",
        pl: "1em"
    }
};

const li = {
    props: {
        fontSize: "18px"
    },
};

const blockquote = {
    props: {
        color: "gray.500",
        my: "1em",
        pl: "2em",
        borderLeft: '2px',
        borderColor: 'gray.500',
        fontSize: "18px",
        lineHeight: "1.8",
    }
}

const a = {
    props: {
        isExternal: true,
        textDecoration: "none",
        color: "#3182CE",
        _hover: {
            textDecoration: "none",
            color: "#4593e6",
        },
    },
};

const img = {
    props: {
        border: "1px",
        borderColor: "gray.300"
    }
}

const code = {
    props: {
        fontSize: 'md',
        px: "0.2em",
        mx: "0.2rem",
    },
}

const preCode = {
    props: {
        fontSize: "18px",
    }
}

const options = {
    replace: (domNode) => {
        if (domNode.type === "tag") {
            if (domNode.name === "h1") {
                return (
                    <Heading as="h1" {...h1.props}>
                        {domToReact(domNode.children, options)}
                    </Heading>
                );
            }
            if (domNode.name === "h2") {
                return (
                    <Heading as="h2" {...h2.props}>
                        {domToReact(domNode.children, options)}
                    </Heading>
                );
            }
            if (domNode.name === "h3") {
                return (
                    <Text as="h3" {...h3.props}>
                        {domToReact(domNode.children, options)}
                    </Text>
                );
            }
            if (domNode.name === "ul") {
                return (
                    <UnorderedList {...ul.props}>
                        {domToReact(domNode.children, options)}
                    </UnorderedList>
                );
            }
            if (domNode.name === 'ol') {
                return (
                    <OrderedList {...ol.props}>
                        {domToReact(domNode.children, options)}
                    </OrderedList>
                )
            }
            if (domNode.name === "li") {
                return (
                    <ListItem {...li.props}>
                        {domToReact(domNode.children, options)}
                    </ListItem>
                )
            }
            if (domNode.name === "p") {
                return (
                    <Text {...p.props}>{domToReact(domNode.children, options)}</Text>
                );
            }
            if (domNode.name === 'blockquote') {
                return (
                    <Box {...blockquote.props}>
                        {domToReact(domNode.children, options)}
                    </Box>
                )
            }
            if (domNode.name === "a") {
                return (
                    <Link {...a.props} href={domNode.attribs.href} isExternal>
                        {domToReact(domNode.children, options)}<ExternalLinkIcon mx='2px' />
                    </Link>
                );
            }
            if (domNode.name === 'img') {
                return (
                    <Image {...img.props} src={domNode.attribs.src} />
                )
            }

        }
    }
}

const Article = ({ data }) => {
    data = data[0]
    const date = data.publishedAt
    const blog = data.blog
    const path = `https://tsumugi.vercel.app/blog/${data.id}`
    const title = data.title
    const description = data?.body
    const image = data?.thumbnail.url
    
    return (
        <Layout>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} key="description" />
                <meta name="twitter:title" content={description} key="twitter:title" />
                <meta name="twitter:image" content={image} key="twitter:image"/>
                <meta property="og:title" content={title} key="og:title" />
                <meta property="og:description" content={description} key="og:description"/>
                <meta property="og:image" content={image} key="og:image" />
                <meta property="og:image:width" key="og:image:width" />
                <meta property="og:image:height" content="600" key="og:image:height" />
            </Head>
            <Container>
                <HStack alignItems="center" >
                    <Badge borderRadius='full' py='1.5' px="3" mb="2" colorScheme='purple' >
                        <CalendarIcon /> {formatDate(date)}
                    </Badge>
                    <ShareButtons path={path} title={data.title} />
                </HStack>
                <Box borderBottom="1px solid #525252">{parse(blog, options)}</Box>
                <VStack alignItems="center" justifyContent="center" mt="2">
                    <Text mb={2} fontSize="lg" fontWeight="bold">この記事をシェアする</Text>
                    <ShareButtons path={path} title={title} />
                </VStack>
            </Container>
        </Layout>
    )
}
export default Article