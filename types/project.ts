import { Timecode } from './timecode'
import { Timeline } from './timeline'

export interface Project {
  name: string
  timelines: Timeline[]
  timecodes: Timecode[]
}
