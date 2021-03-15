import { Project } from 'project'
import os from 'os'
import path from 'path'
import fs from 'fs'
import config from '../../config.json'

export class ProjectManager {
  private projects: Project[] = []
  private projectFolder: string = config.projectFolder || path.resolve(os.homedir(), 'timeline', 'projects')
  constructor() {
    this.loadProjects()
  }

  private loadProjects() {
    try {
      const fileNameList = fs.readdirSync(this.projectFolder)
      fileNameList.forEach(fileName => {
        const fileContent = fs.readFileSync(path.resolve(this.projectFolder, fileName), {
          encoding: 'utf-8',
        })
        const project = JSON.parse(fileContent) as Project // this needs a validation check
        this.projects.push(project)
      })
    } catch (err) {
      if (err.code === 'ENOENT') {
        console.warn(`Project directory not found, creating new project directory at: ${this.projectFolder}`)
        fs.mkdirSync(this.projectFolder, {
          recursive: true,
        })
      } else {
        throw err
      }
    }
  }
}
