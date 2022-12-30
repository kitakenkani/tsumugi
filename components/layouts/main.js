import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from "@chakra-ui/react"
import Footer from '../footer'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Tsumugi homepage" />
                <meta name="author" content="Kentaro Kitamura" />
                <meta name="author" content="マンドリンオーケストラ紬" />
                <link rel="apple-touch-icon" href="logo.svg" />
                <meta name="twitter:title" content="マンドリンオーケストラ紬 ホームページ" />
                <meta name="twitter:card" ntent="summary_large_image" />
                <meta name="twitter:site" content="@TumugiMO" />
                <meta name="twitter:creator" content="@kitakenkani" />
                <meta name="twitter:image" content="main.jpg" />
                <meta property="og:site_name" content="マンドリンオーケストラ紬" />
                <meta name="og:title" content="マンドリンオーケストラ紬" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="main.jpg" />

                <title>マンドリンオーケストラ紬</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW={{
                base: "100%",
                sm: "35rem",
                md: "43.75rem",
                lg: "57.5rem",
                xl: "75rem",
                xxl: "87.5rem"
            }} pt={14}>
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main