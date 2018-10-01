// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD8EwQKy7XxwFnzy6zuuaRgK2bJJYMAnPo",
    authDomain: "testfirebase-d92e4.firebaseapp.com",
    databaseURL: "https://testfirebase-d92e4.firebaseio.com",
    projectId: "testfirebase-d92e4",
    storageBucket: "testfirebase-d92e4.appspot.com",
    messagingSenderId: "909071927991"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var data = {
        Name: "Breana",
        FavGame:"NikkiDressUp",
        FavGameBuddy: "Matthew",
        PreferredGame: "Farming"
    }

var magicButton = document.getElementById("magic_button");

//Write To the database!!!
function magic(){
var name = document.getElementById("name").value;
var Fgame = document.getElementById("Fgame").value;
var Fbud = document.getElementById("Fbud").value;
var Fgenre = document.getElementById("Fgenre").value;
    data = {
        Name: name,
        FavGame:Fgame,
        FavGameBuddy: Fbud,
        PreferredGame: Fgenre
    }
    console.log("AbraCadabra!")
    database.ref('gamer').push(data); //writes to the database
}

//Read From the database!
var readButton = document.getElementById("read_button");
function readFrom()
{
    var ref = database.ref('gamer');
    ref.on('value', gotData, errData); //reads from the database!
    console.log("Alakazam!");
}
var list = document.getElementById("list");
function gotData(data)
{
    //console.log(data.val());
    document.getElementById("list").innerHTML="";
    var gamer = data.val();
    var keys = Object.keys(gamer);
    for(var i = 0; i < keys.length; i++)
        {
            var k = keys[i];
            var name = gamer[k].Name;
            var game = gamer[k].FavGame;
            var bud = gamer[k].FavGameBuddy;
            var genre = gamer[k].PreferredGame;
            //console.log(name,game,bud,genre);
            var li = document.createElement('LI');
            var tn = document.createTextNode(name);
            li.appendChild(tn);
            document.getElementById("list").appendChild(li);
        } 
}

function errData(err)
{
    console.log("Error!");
    console.log(err);
}