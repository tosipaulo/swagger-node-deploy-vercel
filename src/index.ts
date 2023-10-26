import express, { Request, Response } from 'express'
import morgan from "morgan";

const app = express()
const port = process.env.PORT || 3333

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

app.get('/', (_req: Request, res: Response) => {
  return res.send('::: Express Typescript on Vercel :::')
})

app.get('/ping', (_req: Request, res: Response) => {
  return res.send('pong 🏓')
})

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`)
})