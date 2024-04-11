import { useState } from 'react';
import { Box, Button, Input } from '@chakra-ui/react';

export default function AuthForm({ onAuthenticate }) {
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('/api/auth', {
            method: 'POST',
            handlers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ password }),
        });

        if (response.ok) {
            onAuthenticate(true)
        } else {
            alert('Authentication failed')
        }
    };

    return (
        <Box as="form" onSubmit={handleSubmit}>
            <Input 
                placeholder='Password'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button type='submit'>Authenticate</Button>
        </Box>
    )
}