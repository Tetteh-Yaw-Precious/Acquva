const itemname = document.getElementById("itemname-js");
const itemworth = document.getElementById("itemworth-js");
const iteminfo = document.getElementById("iteminfo-js");
const productionyearbegin = document.getElementById("prodyrbegin-js");
const productionyearend = document.getElementById("prodyrend-js");
const imageupload = document.getElementById("imageupload-js");
const Auctiontime = document.getElementById("Auctiontimeend");

auth.onAuthStateChanged((user) => {
  let data;
  db.collection("GlobalData")
    .doc("globals")
    .onSnapshot((doc) => {
      data = doc.data();
      console.log(data);
      document.getElementById("usercount").innerHTML =
        data.UserCounts > 1
          ? `${data.UserCounts} Users`
          : `${data.UserCounts} user`;
      //   document.getElementById("productscount-js").innerHTML = `${data.UserCounts} user`;
    });

  console.log(additemform);
  additemform.addEventListener("submit", (e) => {
    e.preventDefault();
    const file = imageupload.files[0];
    const name = itemname.value.trim();
    const metadata = {
      contentType: file.type,
    };
    const postingimage = storage.child(name).put(file, metadata);
    postingimage
      .then((snapshot) => snapshot.ref.getDownloadURL())
      .then((url) => {
        console.log(url);
        let itemDetails = {
          Itemname: itemname.value,
          Itemworth: itemworth.value,
          Iteminfo: iteminfo.value,
          productionyearbegin: productionyearbegin.value,
          productionyearend: productionyearend.value,
          auctiontime: firebase.firestore.Timestamp.fromDate(
            new Date(Auctiontime.value)
          ),
          imageURL: url,
        };

        db.collection("Auctions")
          .doc(itemname.value)
          .set(itemDetails)
          .then(() => {
            console.log("posted");
          });
      });
      additemform.reset()
  });
});

console.log(signout);
signout.addEventListener("click", (e) => {
  e.preventDefault();
  auth
    .signOut()
    .then((user) => {
      if (user == null) {
        localStorage.clear();
        location.href = "/html/login.html";
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
