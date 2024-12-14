import express from 'express';
import routes from '../adapters/http/routes';

const app = express();
app.use(express.json());
app.use(routes);

const PORT = 3000; //process.env.PORT
const environment = process.env.ENVIRONMENT || 'sandbox';
const paypal_client_id = process.env.PAYPAL_CLIENT_ID;
const paypal_client_secret = process.env.PAYPAL_CLIENT_SECRET;
const endpoint_url = 'https://api-m.sandbox.paypal.com';

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})