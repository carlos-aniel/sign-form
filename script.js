// Form config
function checkUserName() {
  var userName = document.getElementById("username").value.length;
  var checkStyle = document.getElementById("check");
  var checkBorder = document.getElementById("username");

  if (userName <= 2) {
    checkStyle.innerHTML =
      '<h3 style="margin: 0; font-size: 15px; font-weight: bold; color: red; ">-Invalid username</h3>';
    checkBorder.style.border = "3px solid red";
  } else {
    checkBorder.style.border = "3px solid green";
  }
}

function checkEmail() {
  var emailData = document.getElementById("email").value;
  var checkStyle = document.getElementById("check");
  var checkBorder = document.getElementById("email");
  const pattern = /^([a-\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})com(\.[a-z]{2,8})/;
  
  //To fix
  if (pattern.test(emailData) = true) {
    checkBorder.style.border = "3px solid green";
    checkBorder.Disabled;
  } else  {
    checkBorder.style.border = "3px solid red";
    checkStyle.innerHTML =
      '<h3 style="margin-top: 25px; font-size: 15px; font-weight: bold; color: red; ">-Invalid email</h3>';
  }
}

function checkPassword() {
  var checkPassword = document.getElementById("password").value;
  var checkStyle = document.getElementById("check");
  var checkBorder = document.getElementById("password");

  if (checkPassword.length >= 8) {
    checkBorder.style.border = "3px solid green";
    checkBorder.Disabled;
  } else {
    checkStyle.innerHTML =
      '<h3 style="margin-top: 50px; font-size: 15px; font-weight: bold; color: red; ">-Invalid password</h3>';
    checkBorder.style.border = "3px solid red";
  }
}