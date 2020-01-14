const User=document.getElementById("userName");
const Email=document.getElementById("userEmail");
//const inBtn=document.getElementById("Btn");
  
function local(){
  const key=User.value;
  const value = Email.value;
  
  
if(key && value){
  localStorage.setItem(key,value);
  location.reload();
}
}