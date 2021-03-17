import { ProjectState } from '../types/projectState'
import { IProject, ProjectCollection } from '../../../types/project'
import { projectCollection } from './dbSetup'

class DBManager {
  private projectStates: Record<string, PouchDB.Database>

  public async getAllProjects(): Promise<IProject[]> {
    return projectCollection.find({})
  }

  public async getProjectByName(projectID: string): Promise<IProject> {
    return projectCollection.findOne({ _id: projectID })
  }

  public async getProjectState(projectID: string) {
    if (this.dbs.hasOwnProperty(projectID)) {
      return this.dbs[projectID]
    } else {
      return null
    }
  }
}

export { DBManager }
