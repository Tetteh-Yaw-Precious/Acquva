const itemname = document.getElementById("itemname-js");
const itemworth = document.getElementById("itemworth-js");
const iteminfo = document.getElementById("iteminfo-js");
const productionyearbegin = document.getElementById("prodyrbegin-js");
const productionyearend = document.getElementById("prodyrend-js");
const imageupload = document.getElementById("imageupload-js");
const Auctiontime = document.getElementById("Auctiontimeend");
const biddeditems = document.getElementById("biddeditems-js");

//building doughnut
let moneyGraph = document.getElementById("moneyGraph").getContext("2d");
console.log(moneyGraph);
Chart.defaults.font.size = 12;
Chart.defaults.font.family = "Raleway,sans-serif";
Chart.defaults.cutOut = 49;
let massPopChart = new Chart(moneyGraph, {
  type: "bar",
  data: {
    labels: ["car", "upcoming", "upcoming", "upcoming"],
    datasets: [
      {
        label: "Population",
        data: [56, 05, 01, 01],
        backgroundColor: ["#FD1C6D", "#FDA31C", ""],
        barThickness: 50,
        fontFamily: "Raleway",
      },
    ],
  },
  options: [],
});

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
    let itemDetails = {
      Itemname: itemname.value.trim(),
      Itemworth: itemworth.value,
      Iteminfo: iteminfo.value,
      productionyearbegin: productionyearbegin.value,
      productionyearend: productionyearend.value,
      auctiontime: firebase.firestore.Timestamp.fromDate(
        new Date(Auctiontime.value)
      ),
      imageURL: "null",
    };
    console.log(itemDetails);

    db.collection("Auctions")
      .doc(itemname.value.trim())
      .set(itemDetails)
      .then(() => {
        console.log("posted");
      });

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
        db.collection("Auctions").doc(name.trim()).update({
          imageURL: url,
        });
      });
    additemform.reset();
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
