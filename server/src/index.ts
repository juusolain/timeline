import { WebSocketServer } from './wss'
import { ProjectManager } from './projectManager'
import { WebServer } from './webServer'
import { DBManager } from './dbManager'

const webSocketServer = new WebSocketServer()
const projectManager = new ProjectManager()
const dbManager = new DBManager()
const webServer = new WebServer()

async function start() {}

webServer.start()
;async () => {
  console.log(await projectManager.getProjects())
}
