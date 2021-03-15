import PouchDB from 'pouchdb'
import path from 'path'
import os from 'os'
import config from '../../../config.json'

const dataFolder = config.dataFolder || path.resolve(os.homedir(), 'timeline', 'data')

const DBConstructor = PouchDB.defaults({ prefix: dataFolder })

class DBManager {
  private db: PouchDB.Database

  public async loadProject(name: string): Promise<void> {
    if (this.db) {
      await this.db.close()
    }
    this.db = new DBConstructor(name)
  }

  public getDB(): PouchDB.Database {
    return this.db
  }
}

export { DBConstructor, DBManager }
