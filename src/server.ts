import express, { json } from 'express'
import { usersRoutes } from './v1/routes/users.routes'
import { classesRoutes } from './v1/routes/class.routes'


const app = express()
app.use(json())
app.use(usersRoutes)
app.use(classesRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))