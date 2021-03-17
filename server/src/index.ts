import { WebSocketServer } from './wss'
import { ProjectManager } from './projectManager'
import { WebServer } from './webServer'
import { DBManager } from './dbManager'

export const webSocketServer = new WebSocketServer()
export const projectManager = new ProjectManager()
export const dbManager = new DBManager()
export const webServer = new WebServer()

async function start() {}

webServer.start()
;async () => {
  console.log(await projectManager.getProjects())
}
