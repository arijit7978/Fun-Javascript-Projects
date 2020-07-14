const text_area = document.querySelector("input")
const button = document.querySelector("button")


var action = "Username"
function clean() {
  if (text_area.value == "Password") {
    text_area.type = "password"
  }
  text_area.value = "";
}

function Username(event) {
  event.preventDefault()
  console.log(text_area.value)
  if (action == "Username") {
    if ((text_area.value.length == 0) || (text_area.value == "Username") ){
      document.body.style.backgroundColor = "red";
      alert("Username can not be blank")
    }
    else {
      action = "Email"
      text_area.value = "Email"
      document.body.style.backgroundColor = "green";
      text_area.style.backgroundImage = "url(../Images/Email-icon.png)";
    }
  }
  else if (action == "Email") {
      if ((text_area.value.length <= 4) || (text_area.value.slice(-4) != ".com") || (!text_area.value.includes("@")) || (text_area.value.slice(-5) == "@.com")) {
        document.body.style.backgroundColor = "red";
        text_area.value = "";
        alert("Not a valid email address")
      }
      else {
        action = "Password"
        text_area.value = "Password"
        document.body.style.backgroundColor = "green";
        text_area.style.backgroundImage = "url(../Images/Password-icon.png)";
      }
  }
  else if (action == "Password") {
      let regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      if ((text_area.value.length <= 6) || (text_area.value.length >= 16) || (!regularExpression.test(text_area.value))) {
        document.body.style.backgroundColor = "red";
        text_area.value = "";
        alert("password should contain six characters with atleast one number and one special character")
      }
      else {
        action = "Thank You"
        text_area.type = "text"
        text_area.value = "Thank You"
        document.body.style.backgroundColor = "green";
        text_area.style.backgroundImage = "url(../Images/Love-icon.png)";
      }
  }
  else {
      text_area.value = "Thank You"
      document.body.style.backgroundColor = "green";
      text_area.style.backgroundImage = "url(../Images/Love-icon.png)";
      alert("You already signed up")
  }
}


text_area.addEventListener("click", clean, false);
button.addEventListener("click", Username)
