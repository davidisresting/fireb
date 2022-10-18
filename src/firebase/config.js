import firebase from '@react-native-firebase/app';

// import '@firebase/auth';
// import '@firebase/firestore';
// import firestore from '@react-native-firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyDTtKPRVfPBuH3F2eeUM4b5uEvlzjYd2yg",
//   authDomain: "rocket-ec86b.firebaseapp.com",
//   databaseURL: "https://rocket-ec86b-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "rocket-ec86b",
//   storageBucket: "rocket-ec86b.appspot.com",
//   messagingSenderId: "670247851047",
//   appId: "1:670247851047:web:4c289e7d650206dbb26a02",
//   measurementId: "G-S6R4VV8ZKG"
// };

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }

// export { firebase };

// const credentials = {
//   clientId: '',
//   appId: '',
//   apiKey: '',
//   databaseURL: '',
//   storageBucket: '',
//   messagingSenderId: '',
//   projectId: '',
// };

const credentials = {
  apiKey: "AIzaSyDTtKPRVfPBuH3F2eeUM4b5uEvlzjYd2yg",
  authDomain: "rocket-ec86b.firebaseapp.com",
  databaseURL: "https://rocket-ec86b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rocket-ec86b",
  storageBucket: "rocket-ec86b.appspot.com",
  messagingSenderId: "670247851047",
  appId: "1:670247851047:web:4c289e7d650206dbb26a02",
  measurementId: "G-S6R4VV8ZKG"
};

const config = {
  name: 'SECONDARY_APP',
};

await firebase.initializeApp(credentials, config);

const apps = firebase.apps;

apps.forEach(app => {
  console.log('App name: ', app.name);
});