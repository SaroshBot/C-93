var firebaseConfig = {
    apiKey: "AIzaSyBB8lxD-uM4a-3K7t1hDYlIGqRaf3mUpQk",
    authDomain: "class-94-d7feb.firebaseapp.com",
    databaseURL: "https://class-94-d7feb-default-rtdb.firebaseio.com",
    projectId: "class-94-d7feb",
    storageBucket: "class-94-d7feb.appspot.com",
    messagingSenderId: "590981558882",
    appId: "1:590981558882:web:11ef9a27e15f72129cd73b"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function AddUser()
{
    user_name= document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"Back to Database!!"
    })
}