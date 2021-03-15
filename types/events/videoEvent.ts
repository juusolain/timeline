import { Event } from '../timeline'

export interface VideoEvent extends Event {
  type: 'videoEvent'
  sourceIndex: number
  sourceName: string
}
