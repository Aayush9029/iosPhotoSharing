let database;
var firebaseConfig = {
    apiKey: "AIzaSyDWTS8tmcADoqWakiVnjLuthKQ2qargIjM",
    authDomain: "iosphotoupload.firebaseapp.com",
    databaseURL: "https://iosphotoupload.firebaseio.com",
    projectId: "iosphotoupload",
    storageBucket: "iosphotoupload.appspot.com",
    messagingSenderId: "340862413425",
    appId: "1:340862413425:web:90668c85b7988cbf7a09d0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
database = firebase.database();

let ref = database.ref("clips");
ref.on("value", gotData, errData);

function gotData(data) {
    let datas = data.val();
    let keys = Object.keys(datas);
  
    for (key of keys) {
      let url = datas[key];
      console.log(datas[key])
      var image = document.createElement("img");
      image.src = url;
      
    //   image.onclick = location.reload(image.src)
      document.getElementById("Image_div").appendChild(image);
    
  }}
  
function errData(err) {
  console.log(err);
}
