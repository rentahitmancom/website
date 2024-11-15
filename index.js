const express = require('express');
const app = express();
const port = 3000;

document.getElementById("submit").onclick = function()
    let dataToShare = {
        message: document.getElementById("message").textContent
    };

    app.get('/api/getData', (req, res) => {
        res.json(dataToShare);
    });

    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
end