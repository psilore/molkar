const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const name = process.env.NAME || 'Molkar';
  res.send(`The ${name} has awoken!`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Molkar: listening on port ${port}`);
});