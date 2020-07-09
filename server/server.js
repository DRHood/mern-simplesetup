import path from 'path'
import express from 'express'
import template from './../template'
import devBundle from './devBundle' //Comment out for production

const app = express()
devBundle.compile(app) //Comment out for production

const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.get('/', (req, res) => {
    res.status(200).send(template())
})

let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', port)
})