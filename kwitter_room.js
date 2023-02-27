
var firebaseConfig = {
      apiKey: "AIzaSyBS3rb7XEzpAMoxsnly4pjMuAW9UfZQkyA",
      authDomain: "kwitter-5c374.firebaseapp.com",
      databaseURL: "https://kwitter-5c374-default-rtdb.firebaseio.com",
      projectId: "kwitter-5c374",
      storageBucket: "kwitter-5c374.appspot.com",
      messagingSenderId: "689893978839",
      appId: "1:689893978839:web:03f886b3c4d0943efa7692"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name= localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="Welcome"+" "+ user_name +"!"
     function addRoom()
     {
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Trying to test Kwitter"    
      })
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
     }
      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
            Room_names = childKey;
            console.log("room_name"+Room_names);
            row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML+=row;


      //Start code

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(room);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logOut()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";      
}

