import admin,{auth,firestore} from 'firebase-admin'
import serviceAccount from './fir-869fb-firebase-adminsdk-xy3i0-ecdeea31bb.json' assert { type: 'json' };

admin.initializeApp({
    credential : admin.credential.cert(serviceAccount)
})

const auth  = auth()
const firestore =firestore()

export { auth,firestore}