const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, 'public');
const middleware = express.static(publicPath);
app.use(middleware);
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on Port 3000');
});
