function validate(){
  var userName = document.forms["contactForm"]["name"].value;
  var userEmail = document.forms["contactForm"]["replyTo"].value;
  var selectedService = document.forms["contactForm"]["service"].value;
  var userMessage = document.forms["contactForm"]["message"].value;

  if (userName == ""){
    alert("All fields must be filled out");
    return false;}

  if (userEmail == ""){
    alert("All fields must be filled out");
    return false;}

  if (selectedService == ""){
    alert("All fields must be filled out");
    return false;}

  if (userMessage == ""){
    alert("All fields must be filled out");
    return false;}
  }

  hoverScript(x){
    document.getElementsByClassName(x).
  }
