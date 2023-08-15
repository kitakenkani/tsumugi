import { ChakraProvider } from "@chakra-ui/react"
import { Analytics } from "@vercel/analytics"
import Layout from "../components/layouts/main"
import theme from '../lib/theme'
import Fonts from "../components/fonts"

const Website = ({ Component, pageProps, router}) =>{
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <Component {...pageProps} key={router.route}/>
            </Layout>
            <Analytics />
        </ChakraProvider>
    )
}

export default Website
