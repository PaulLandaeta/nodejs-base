const express = require('express');
const routes = require('./routes');
const app = express();
const cors = require('cors');
app.set('port', (process.env.S_PORT || 5000));

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(app.get('port'), () => {
    console.log('Happy Codding the app listening on port', process.env.S_PORT);
});
