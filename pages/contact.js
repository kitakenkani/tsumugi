import {
    Container,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Heading
} from '@chakra-ui/react';

export default function Contact() {
    return (
        <Container centerContent>
            <Heading as="h1" mb={6}>Contact</Heading>

            <form acrion="/api/contact" method='post'>
                <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input placeholder='Your Name' />
                </FormControl>
                <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder='Your Email' />
                </FormControl>
                <FormControl>
                    <FormLabel>Message</FormLabel>
                    <Input placeholder='Your Message' />
                </FormControl>
                <Button 
                    mt={4}
                    type="submit"
                >
                    Send Message
                </Button>
            </form>
        </Container>
    )
}