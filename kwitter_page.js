var firebaseConfig = {
    apiKey: "AIzaSyD5Lp0kQoXU0ukUjMPk6z3HGXJTMM4TDsk",
    authDomain: "c94-kwitter-webapp---part-2.firebaseapp.com",
    databaseURL: "https://c94-kwitter-webapp---part-2-default-rtdb.firebaseio.com",
    projectId: "c94-kwitter-webapp---part-2",
    storageBucket: "c94-kwitter-webapp---part-2.appspot.com",
    messagingSenderId: "329829934543",
    appId: "1:329829934543:web:f4162daf30d5d74c231eba",
    measurementId: "G-NY2CXTVPTR"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("TR").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

var user_name=localStorage.getItem("user_name");
var room_name=localStorage.getItem("room_name");

function send(){
var msginput=document.getElementById("msginput").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msginput,
      like:0
});
document.getElementById("msginput").value="";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }