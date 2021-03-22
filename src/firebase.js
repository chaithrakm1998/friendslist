import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";
const config = {
        apiKey: "AIzaSyB80rL0Y-XpaAt0P-v-13Dz97RleCIIn8Q",
        authDomain: "friendslist-74ae8.firebaseapp.com",
        projectId: "friendslist-74ae8",
        storageBucket: "friendslist-74ae8.appspot.com",
        messagingSenderId: "1055931061768",
        appId: "1:1055931061768:web:a7026a432fe5c92752a3bd",
        measurementId: "G-2FEJ2430LL"
      };
      
      firebase.initializeApp(config);
      export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;
      
        const userRef = firestore.doc(`users/${userAuth.uid}`);
      
        const snapShot = await userRef.get(); //retreieved the info
      
        if (!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();
          try {
            await userRef.set({ //sent information to the db
              displayName,
              email,
              createdAt,
              ...additionalData
            });
          } catch (error) {
            console.log('error creating user', error.message);
          }
        }
      
        return userRef;
      };
      
      export const auth = firebase.auth();
      export const firestore = firebase.firestore();
      
      
    
    export default firebase;
