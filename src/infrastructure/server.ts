import express from 'express';
import routes from '../adapters/http/routes';
import axios from 'axios';

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(routes);

const PORT = 3000; //process.env.PORT
const environment = process.env.ENVIRONMENT;
const paypal_client_id = process.env.PAYPAL_CLIENT_ID;
const paypal_client_secret = process.env.PAYPAL_CLIENT_SECRET;
const endpoint_url = 'https://api-m.sandbox.paypal.com';
const token = get_access_token();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

app.get('/token', (req, res) => {
    res.json({ token: token });
});

async function get_access_token() {
    const auth = `${paypal_client_id}:${paypal_client_secret}`;
    const data = 'grant_type=client_credentials';
    
    try {
        const response: { access_token: string } = await axios.post(`${endpoint_url}/v1/oauth2/token`, data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${Buffer.from(auth).toString('base64')}`
            },
            auth: {
                username: paypal_client_id,
                password: paypal_client_secret
            } as any
            
        });
        return response.access_token;
    } catch (error) {
        console.error('Error fetching access token:', error);
        throw error;
    }
}