import { IModel, PouchCollection, PouchORM } from 'pouchorm'

export interface IProject extends IModel {
  name: string
  dbName: string
  createDate: Date
}

export class ProjectCollection extends PouchCollection<IProject> {