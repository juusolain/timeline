import { Router, Request, Response } from 'express'
import { dbManager } from '../../index'

const router = Router()

router.get('/all-projects', async (req: Request, res: Response) => {
  const allProjects = dbManager.getAllProjects()
})
