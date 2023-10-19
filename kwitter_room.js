
//AGREGA TUS ENLACES DE FIREBASE AQUÍ

const firebaseConfig = {
      apiKey: "AIzaSyC9f-cJT420OImzrrWY394n51Gk8EehvsU",
      authDomain: "proye101.firebaseapp.com",
      projectId: "proye101",
      storageBucket: "proye101.appspot.com",
      messagingSenderId: "213495862447",
      appId: "1:213495862447:web:23dfd40895057f0616705a"
    };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "¡Te damos la bienvenida, " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "agregando el nombre de la sala"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Inicia el código
                  console.log("Nombre de la sala: " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //Finaliza el código
            });
      });
}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

