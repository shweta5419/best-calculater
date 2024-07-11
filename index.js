const express = require('express');

const app = express();

const routing = require('./router');

app.use('/', routing);

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});
