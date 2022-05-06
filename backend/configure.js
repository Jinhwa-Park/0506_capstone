import helmet from 'helmet'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import { Container } from 'typedi'
import express from 'express'
import config from './config'

import alyacBuildModel from "./models/dbSchema/alyac";

import unreachable from './common/middleware/unreachable'
import errorHandler from './common/middleware/errorHandler'

import AlyacDBManager from './manager/dbManager/alyacDBManager'

import apiAlyacRouter from "./routes/api/alyac";

export default async function configure(app) {
  try {
    // db options
    const dbOptions = {
      serverSelectionTimeoutMS: 3000,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
    // db host
    const dbHost = `${config.dbHost}/${config.dbName}`
    // db connection
    const dbConnection = await mongoose.createConnection(dbHost, dbOptions)

    // db schema
    const alyacModels = alyacBuildModel(dbConnection)

    for (const [key, value] of Object.entries(alyacModels)) {
      Container.set(`alyac.dbModel.${key}`, value)
    }

    // dbManager
    Container.set('alyac.dbManager.AlyacDBManager', new AlyacDBManager(Container))

    app.enable('trust proxy')
    app.use(helmet())
    app.use(cors())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())


    // api router
    app.use('/api', apiAlyacRouter(Container))

    app.use(unreachable())
    app.use(errorHandler())

    console.log('initialize configure')
  } catch (e) {
    console.log(e)
    console.log('Server initialize fail')
  }
}
