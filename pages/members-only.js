import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import AuthForm from '../components/AuthForm';

export default function MembersOnlyPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    if (!isAuthenticated) {
        return <AuthForm onAuthenticate={setIsAuthenticated} />;
    }

    return (
        <Box>
            <h1>Wellcome to the Members-Only Page</h1>
        </Box>
    )
}