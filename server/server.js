const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.set('port', 3000);

app.listen(app.get('port'), () => {
  console.log(`[OK] Server is running on localhost:${app.get('port')}`);
});

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/addCustomer', require('./api/addCustomer'));
app.use('/', express.static(path.join(__dirname, '../dist')));