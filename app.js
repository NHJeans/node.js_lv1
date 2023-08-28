import express from "express";
import connect from "./schemas/index.js";
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import { options } from './swagger/config.js';
import { postsRouter, commentsRouter } from './routes/index.js';


const app = express();
const port = 6010;
connect();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use("/posts", postsRouter);
app.use("/posts", commentsRouter);
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(err.status || 500).send({ message: err.message }); 
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});




