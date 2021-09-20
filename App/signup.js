const mailField = document.querySelector(".emailfield");
const passwordField = document.querySelector(".passwordfield");
const usernamefield = document.querySelector(".usernamefield");
const confirmpasswordField = document.querySelector(".confirmpassword");
const signupform = document.querySelector(".signform");
let data;
let usercount;

signupform.addEventListener("submit", (e) => {
  e.preventDefault();
  auth
    .createUserWithEmailAndPassword(mailField.value, passwordField.value)
    .then((user) => {
      console.log(user);
      let userId = user.uid;
      /*getting new user details from input and creating user info */
      let userDets = {
        email: mailField.value,
        username: usernamefield.value,
        phonenumber: null,
      };

      /**adding new user details to user document */
      db.collection("Users")
        .doc(userId)
        .set(userDets)
        .then(() => {
          console.log("doc created");
          db.collection("GlobalData")
            .doc("globals")
            .onSnapshot((doc) => {
              data = doc.data();
              console.log(data);
              localStorage.setItem("localusercount", data.UserCounts)
                usercount = localStorage.getItem("localusercount");
                console.log(usercount);
            });
            location.href = "/html/login.html";
        //   auth.signOut();
        });
    });
  /**updating the number of users we have in our system when a new
   * user signs up in our system
   */
// //   db.collection("GlobalData")
// //     .doc("globals")
// //     .update({
//         let updatecounter = firebase.firestore.FieldValue.increment(usercount++);
// //       UserCounts: usercount.updatecounter,
// //     })
// //     .catch((error) => {
// //       console.log(error);
// //     });
});

//test
console.log(usercount)
