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
                <meta name="description" content="マンドリンオーケストラ紬は、2022年に生まれたマンドリン団体です。" />
                <meta name="author" content="Kentaro Kitamura" />
                <meta name="author" content="マンドリンオーケストラ紬" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
                <link rel="icon" type="image/png" href="/favicons/android-chrome-192x192.png" sizes="192x192"/>
                <link rel="icon" type="image/png" href="/favicons/android-chrome-512x512.png" sizes="512x512"/>
                <link rel="manifest" href="/favicons/webmanifest.json" />
                <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#000000" />
                <link rel="shortcut icon" href="/favicons/favicon.ico" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="twitter:title" content="マンドリンオーケストラ紬 ホームページ" />
                <meta name="twitter:card" ntent="summary_large_image" />
                <meta name="twitter:site" content="@TumugiMO" />
                <meta name="twitter:creator" content="@kitakenkani" />
                <meta name="twitter:image" content="https://tsumugi.vercel.app/images/main.jpg" />
                <meta property="og:site_name" content="マンドリンオーケストラ紬" />
                <meta name="og:title" content="マンドリンオーケストラ紬" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://tsumugi.vercel.app/images/main.jpg" />

                <title>マンドリンオーケストラ紬</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.xl" pt={20}>
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main
