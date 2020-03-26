//Firestoreのデータを取得したい場合はuseFirestoreConnectを使う
import { userFirestoreConnect } from 'react-redux-firestore'

const SomeComponent = () => {

  //Collection/Documentにconnectしたい場合
  userFirestoreConnect({
    collection: 'collName',
    doc: 'docName'
  })
  //Collection/Document/subCollectionにconnectしたい場合
  //subcollectionをconnectしたい場合はstoreAsを使う
  //storeAs: '取得してきた値を保存しておくための名前'
  userFirestoreConnect({
    collection: 'CollName',
    doc: 'docName',
    subcollections: [{
      collection: 'subCollName',
    }],
    storeAs: 'collName/docName/subCollName'//任意の名前
  })

  return (
    <div>
      適当なJSX
    </div>
  )
}
