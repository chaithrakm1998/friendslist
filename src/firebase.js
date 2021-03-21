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
    export default firebase;
