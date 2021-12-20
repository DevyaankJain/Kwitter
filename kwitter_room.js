
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA0A4FW1grYH-V5JCF_BQZvxuajwTisIgo",
      authDomain: "kwitter-58d9a.firebaseapp.com",
      databaseURL: "https://kwitter-58d9a-default-rtdb.firebaseio.com",
      projectId: "kwitter-58d9a",
      storageBucket: "kwitter-58d9a.appspot.com",
      messagingSenderId: "70758002814",
      appId: "1:70758002814:web:e376480531d5c6cf74682f"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
