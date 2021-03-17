import PouchDB from 'pouchdb'
import path from 'path'
import os from 'os'
import config from '../../../config.json'
import { ProjectCollection } from 'project'

const dataFolder = config.dataFolder || path.resolve(os.homedir(), 'timeline', 'data')

const DBConstructor = PouchDB.defaults({ prefix: dataFolder })

export const projectCollection: ProjectCollection = new ProjectCollection('main')

export { DBConstructor }
