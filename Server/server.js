const express = require('express');
const app = express();
const PORT =5001;
app.use(express.static('server/public'));
app.listen(PORT,() =>{console.log('listening on port',PORT);
});

