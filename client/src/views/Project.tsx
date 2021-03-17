import { Suspense } from 'react'
import { PouchDB } from 'react-pouchdb'
import styles from './Project.module.css'

type ProjectProps = {
  projectName: string
}

function Project(props: ProjectProps) {
  const dbAddress = new URL(props.projectName, window.location.origin)

  return (
    <PouchDB name={dbAddress}>
      <Suspense fallback="loading...">
        <div className={styles.main}>Hi</div>
      </Suspense>
    </PouchDB>
  )
}

export default Project
