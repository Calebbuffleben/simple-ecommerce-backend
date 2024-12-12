import express from 'express';
import routes from '../adapters/http/routes';

const app = express();
app.use(express.json());
app.use(routes);

const PORT = 3000; //process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})