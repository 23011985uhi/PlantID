
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';




const firebaseConfig = {
  apiKey: "AIzaSyAN5Qmc290qGCb5NF8sH_QKl0ySDO-nDEE",
  authDomain: "diss-project-d26ad.firebaseapp.com",
  projectId: "diss-project-d26ad",
  storageBucket: "diss-project-d26ad.appspot.com",
  messagingSenderId: "15351133165",
  appId: "1:15351133165:web:fcb74628b5929af5a6ede4"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app, {experimentalAutoDetectLongPolling: true, experimentalForceLongPolling: true});


export { auth, db};