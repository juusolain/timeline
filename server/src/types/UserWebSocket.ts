import WebSocket from 'ws'

interface UserWebSocket extends WebSocket {
  isAlive: boolean
  lastPingTime: number
  subscriptions: []
}
