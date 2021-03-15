import ExpressPouchDB from 'express-pouchdb'
import { DBConstructor } from '../../dbManager'

export default ExpressPouchDB(DBConstructor, {
  mode: 'minimumForPouchDB',
})
