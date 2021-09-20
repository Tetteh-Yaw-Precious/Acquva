const mailField = document.querySelector(".emailfield");
const passwordField = document.querySelector(".passwordfield");
const loginForm = document.querySelector(".loginform");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = mailField.value;
  const password = passwordField.value;
  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      auth.onAuthStateChanged(function (user) {
        console.log(user);
        if (email == "acquva.finalproject@gmail.com") {
          location.href = "/html/Admindashboard.html";
        }else{
          location.href = "/html/Userdashboard.html"
        }
      });
    })
    .catch((err) => console.log(err));
});
