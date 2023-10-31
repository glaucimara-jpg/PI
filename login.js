function addUser() {

    user_name = document.getElementById("user_name").value;
    user_fone = document.getElementById("user_fone").value;
  
    
    localStorage.setItem("user_name", user_name);
    localStorage.setItem("user_fone", user_fone);
    
    
  
    
      window.location = "room.html";
  }