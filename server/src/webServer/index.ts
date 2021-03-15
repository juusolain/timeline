import Express from 'express'

import { RequestHandler } from 'express'

export class WebServer {
  private app = Express()
  constructor() {}

  public addMiddleWare(path: string, middleware: RequestHandler) {
    this.app.use(path, middleware)
  }
}
