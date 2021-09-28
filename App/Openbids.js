//getting elements
const openbids = document.getElementById("openBids-js");

//real time date
const date = new Date();
//insert the date
document.getElementById("date").innerHTML = date.toDateString();
let array = [];

//getting posted items from firebase
db.collection("Auctions").onSnapshot((posteditem) => {
  posteditem.forEach((doc) => {
    const data = doc.data();
    array.push(data);
  });
  console.log(array);
  array.map((item) => {
    let templatelit = `
    <div class="card cardshadow">
        <div class="image cardshadow" style="background-image: url(${item.imageURL})">
        </div>
        <div class="text-dets">
          <p> <span>Item name:</span> ${item.Itemname}  </p>
          <p>Worth: ${item.Itemworth} </p>
        </div>
      </div>
    `;

    console.log(templatelit);

    openbids.innerHTML += templatelit;
  });
});
