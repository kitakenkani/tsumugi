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
    const handleSubmit = (e) => {
        e.preventDefault(); 
        alert('未実装です。お手数ですが、ツイッター@TumugiMO までご連絡ください。'); // アラートを表示します
    }
    return (
        <Container centerContent>
            <Heading as="h1" mb={6}>Contact</Heading>

            <form onSubmit={handleSubmit} method='post'>
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
                    <Textarea placeholder='Your Message' />
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