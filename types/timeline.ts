export interface Event {
  name: string
  type: string // defined by extensions
  color: string
  length: number // length in ms
  time: number // time from start in ms
}

export interface Channel {
  name: string
  events: Event[]
}

export interface Timeline {
  name: string
  channels: Channel[]
}
