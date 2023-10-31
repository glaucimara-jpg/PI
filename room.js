user_name = localStorage.getItem("user_name");
user_fone = localStorage.getItem("user_fone");

	


  
document.getElementById("frase").innerHTML = "BEM VINDO(A) " + user_name + "!";

function send()
{
  text = document.getElementById("text").value;
  firebase.database().ref(texto_usuario).push({
    name:user_name,
    message:text,
    telefone : user_fone,
    
   });

  document.getElementById("text").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         
	       name = message_data['name'];
	       message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

        row = name_with_tag + message_with_tag +like_button + span_with_tag;       
        document.getElementById("output").innerHTML += row;
//End code
      } });  }); }






function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("user_fone");


window.location.replace("index.html");
}