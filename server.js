import express from 'express';
import cors from 'cors';
import axios from 'axios';


const app = express();
const port = 8080;

app.use(cors());

app.get('/api/binance/:endpoint', async (req, res) => {
    try {
        const binanceResponse = await axios.get(`https://api.binance.com/api/v3/${req.params.endpoint}`, {
            params: req.query
        })
        res.json(binanceResponse.data)
    } catch {
        res.status(500).send('Server Error');
    }
})

app.listen(port, () => {
    console.log('Listening on port', port);
})

