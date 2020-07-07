import express from 'express'
import devBundle from './devBundle' //Comment out for production
import path from 'path'

const app = express()
const CURRENT_WORKING_DIR = process.cwd()
devBundle.compile(app) //Comment out for production
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))
