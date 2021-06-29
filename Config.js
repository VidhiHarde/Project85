import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyBvbiYfhKY9V7kRxjVn4qwKBh9aDb6VD8o',
  authDomain: 'spectagram-b5571.firebaseapp.com',
  projectId: 'spectagram-b5571',
  storageBucket: 'spectagram-b5571.appspot.com',
  messagingSenderId: '581039540979',
  appId: '1:581039540979:web:893af244a08ec93e8e4586',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
