function passwordValidation(ev) {
  ev.preventDefault();
  var passValue = document.getElementById("password").value;
  var confpassValue = document.getElementById("confirmPassword").value;
  if (passValue !== confpassValue) {
    window.alert("Passwords do not match!");
    ev.preventDefault();
  }
}
