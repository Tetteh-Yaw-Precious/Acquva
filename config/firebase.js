const firebaseConfig = {
  apiKey: "AIzaSyC3Xm64TZCi5lndK4nDq2zs8IVfolmXPV0",
  authDomain: "acquva-auction-system.firebaseapp.com",
  projectId: "acquva-auction-system",
  storageBucket: "acquva-auction-system.appspot.com",
  messagingSenderId: "153597810753",
  appId: "1:153597810753:web:e3adf0f2c1d320262dcec0",
  measurementId: "G-894JBP12GQ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage().ref();

