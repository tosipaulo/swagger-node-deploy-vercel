import express, { NextFunction, Request, Response } from 'express'
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from './swagger.json';

const app = express()
const port = process.env.PORT || 3333;

app.use(express.static("api-docs"));

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDoc)
);

app.use(express.json());
app.use(morgan("tiny"));

app.get('/', (_req: Request, res: Response) => {
  return res.send('::: Express Typescript on Vercel :::')
})

app.get('/ping', (_req: Request, res: Response) => {
  return res.send('pong 🏓')
})

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`)
})