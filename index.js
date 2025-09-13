const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('*', async (req, res) => {
    const url = 'https://ecsr.io' + req.url;
    const response = await fetch(url);
    const body = await response.text();

    res.set({
        'Access-Control-Allow-Origin': '*',
        'X-Frame-Options': 'ALLOWALL',
        'Content-Security-Policy': "default-src * 'unsafe-inline' 'unsafe-eval'"
    });

    res.send(body);
});

app.listen(8080, () => console.log('Proxy running on http://localhost:8080'));
