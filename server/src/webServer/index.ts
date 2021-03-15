import Express from 'express'
import { RequestHandler } from 'express'
import pouchdb from './middleware/pouchdb'

export class WebServer {
  private app = Express()
  constructor() {
    this.addMiddleWare('/db', pouchdb)
  }

  public addMiddleWare(path: string, middleware: RequestHandler) {
    this.app.use(path, middleware)
  }

  public start() {
    this.app.listen(3000, () => {
      console.log('listening')
    })
  }
}
