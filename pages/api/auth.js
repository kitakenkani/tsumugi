export default function handler(req, res) {
    if (req.method === 'POST') {
        const { password } = req.body;
        console.log(password)
        if ( password === 'a' ) {
            return res.status(200).json({ authenticated: true});
        }
        return res.status(401).json({ authenticated: false});
    }
    return res.status(405).json({ message: 'Method not allowed' });
}