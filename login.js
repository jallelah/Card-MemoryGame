

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAp0A1uLtixyjPZWBq01_JfeKTJ3B48atQ",
    authDomain: "memory-game-login.firebaseapp.com",
    databaseURL: "https://memory-game-login.firebaseio.com",
    projectId: "memory-game-login",
    storageBucket: "memory-game-login.appspot.com",
    messagingSenderId: "742483759974",
    appId: "1:742483759974:web:557cc039d683b7c8edeea7",
    measurementId: "G-J0T6JJETVB"
    };
  firebase.initializeApp(config);
  var myCollection = firebase.database();

  $(document).ready(function() {

//Get A reference to your Database
console.log(myCollection)

  myCollection.ref('auth').on('value', function (results) {
      var details= results.val();


console.log(results.val());

$('#submit').click(function(event){
  event.preventDefault();
var username = $('#username').val();
var password = $('#password').val();
console.log(username)
if(details.username == username && details.password == password )
{
  //redurect to html index file
  window.location.href = "./index.html";

}
  })

})

});
