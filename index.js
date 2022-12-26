import express from 'express';
import cors from 'cors';

import { popularProducts } from './src/data/index.js';

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send({
    github: 'https://github.com/hritiksingh73/grocery-backend',
  });
});

app.get('/products/popular', (req, res) => {
  res.send(popularProducts);
});

app.get('/products/:prodID', (req, res) => {
  const { prodID } = req.params;
  const product = popularProducts.filter((item) => item.id === prodID);
  res.send(product);
});

app.listen(port, () =>
  console.log('🚀 Server ready at: http://localhost:3000')
);
