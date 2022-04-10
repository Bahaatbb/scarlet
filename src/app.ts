import '@config/env'
import express, { Application } from 'express'

const app: Application = express()

const PORT: string = process.env.PORT || '4000'

app.get('/', (_req, res) => res.send('Hello world!'))

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
