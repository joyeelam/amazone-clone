import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'

dotenv.config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

// init server
app.get('/', (req, res) => {
  res.send('Server is ready')
})

app.use('/api/users', userRouter)
app.use('/api/products', productRouter)

app.use((err, req, res, next) => {
  res.status(500).send({message: err.message})
})

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`)
})