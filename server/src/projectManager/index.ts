import { Project } from 'project'
import os from 'os'
import path from 'path'
import fs from 'fs'
import config from '../../../config.json'
import { DBConstructor } from '../dbManager'

export class ProjectManager {
  public async getProjects() {
    return await DBConstructor.allDbs()
  }
}
