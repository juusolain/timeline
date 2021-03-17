import ExpressPouchDB from 'express-pouchdb'
import { DBConstructor } from '../../dbManager/dbSetup'

export default ExpressPouchDB(DBConstructor, {
  mode: 'minimumForPouchDB',
})
