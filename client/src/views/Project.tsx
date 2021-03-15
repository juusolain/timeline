import { Suspense } from 'react'
import { PouchDB } from 'react-pouchdb'
import styles from './Project.module.css'

type ProjectProps = {
  projectName: string
}

function Project(props: ProjectProps) {
  return (
    <PouchDB name={props.projectName}>
      <Suspense fallback="loading...">
        <div className={styles.main}>Hi</div>
      </Suspense>
    </PouchDB>
  )
}

export default Project
