import   express  from "express";
const app = express()

app.get('/', (req, res) => {
  res.json({
    message: 'Momo api'
  })
})

app.listen(3003, () => {'Listening...'})