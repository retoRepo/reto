import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBUWlMOK39zR4QqtUO0swtLu7euxlrFKZQ",
    authDomain: "lab-iot-project.firebaseapp.com",
    databaseURL: "https://lab-iot-project.firebaseio.com",
    projectId: "lab-iot-project",
    storageBucket: "lab-iot-project.appspot.com",
    messagingSenderId: "251900515743"
  };
  
  firebase.initializeApp(firebaseConfig);


export default firebase;