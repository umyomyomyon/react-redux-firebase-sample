import { Provider } from 'react-redux'
import App from './App'

//firebase
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

//react-redux-firebase, redux-firestore
import { firebaseReducer, ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { firestoreReducer, createFirestoreInstance } from 'redux-firestore'

import {  } from './config'

const rrfConfig = {
  userProfile: 'users' //これは公式ドキュメントでは書いてあるが、使わない場合rrfConfig = {}としてもよい
}

//firebaseのinitializeする、今回は処理をまとめたいので関数化した
const initializeFirebase = (firebaseConfig) => {
  const token = store.get('firestore_token')//自分の環境の場合はstore内にcustomTokenを保持しているのでそこからtokenを持ってくる
  firebase.initializeApp(firebaseConfig)
  firebase.firestore()
  firebase.auth().signInWithCustomToken(token).catch((error) => {
    //ここにはエラーが起こった場合の処理を書く
  })
}

//この後<ReactReduxFirebaseProvider />にわたすやつ
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

const NannkaTopLevelNoComponent = () => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App/>
      </ReactReduxFirebaseProvider>
    </Provider>
  )
}


