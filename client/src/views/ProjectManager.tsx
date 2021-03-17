import { Suspense } from 'react'
import { PouchDB } from 'react-pouchdb'
import styles from './Project.module.css'

function ProjectManager() {
  return (
    <Suspense fallback="loading...">
      <div className={styles.main}>Hi</div>
    </Suspense>
  )
}

export default ProjectManager
