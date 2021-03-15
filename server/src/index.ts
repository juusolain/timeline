import { WebSocketServer } from './wss'
import { ProjectManager } from './projectManager'
import { WebServer } from './webServer'

const webSocketServer = new WebSocketServer()
const projectManager = new ProjectManager()
const webServer = new WebServer()
