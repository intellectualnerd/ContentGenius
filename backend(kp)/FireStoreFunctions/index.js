import serviceAccount from '../fir-869fb-firebase-adminsdk-xy3i0-ecdeea31bb.json'  assert { type: 'json' };
import admin from 'firebase-admin';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://fir-869fb.firebaseio.com"
});

const  firestore = admin.firestore();
const auth=admin.auth();
export  {firestore,auth};
