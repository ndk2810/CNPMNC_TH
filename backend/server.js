const express = require('express')
const app = express()
const port = 5000
const sql = require('mssql/msnodesqlv8')
const cors = require('cors')

app.use(cors())

//IMPORT ROUTERS
const diaDiemRouter = require('./routes/diaDiem')
const tourRouter = require('./routes/tour')

const db = new sql.ConnectionPool({
    database: 'TOURDULICH',
    server: '.\\SQLEXPRESS',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true
    }
})

app.use('/diaDiem', diaDiemRouter)
app.use('/tour', tourRouter)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})