import { combineReducers } from 'redux'
import { firebaseReducer } from 'reac-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
})
