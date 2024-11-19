const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from Express REST API!' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
