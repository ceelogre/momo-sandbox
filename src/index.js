import   express  from "express";
const app = express()
import * as dotenv from "dotenv"
dotenv.config()

app.get('/', (req, res) => {
  res.json({
    message: 'Momo api'
  })
})
const port = process.env.NODE_ENV === 'production'? process.env.PORT: 3003
app.listen(port, () => {console.info('Listening...')})