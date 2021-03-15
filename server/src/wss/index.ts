import WebSocket from 'ws'

class WebSocketServer {
  private wss: WebSocket.Server
  constructor() {
    this.wss = new WebSocket.Server({
      port: 7634,
    })
    this.wss.on('connection', (ws: WebSocket) => {})
  }
  public broadcastWsMessage(message: any) {
    this.wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(message))
      }
    })
  }
}

export { WebSocketServer }
