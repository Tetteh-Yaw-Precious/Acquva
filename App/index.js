
const dropdownicon = document.getElementById("dropdownarrow")
const signout = document.querySelector(".signout");
const dropdownitem = document.getElementById("dropdownitem-js")
const closeicon = document.getElementById("close-additempop-icon-js");
const additempopup = document.getElementById("additempopup-js");
const additemform = document.getElementById("additemform-js");


dropdownicon.addEventListener("click", (e) => {
  e.preventDefault;
  signout.classList.toggle("display--active");
});
//showing add itempopup
const additem = document.getElementById("additem-js");
additem.addEventListener("click",(e)=>{
  e.preventDefault()
  additempopup.classList.remove("display--active")
})
  //closing additem popup
  
  closeicon.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log(e.target);
    additempopup.classList.add("display--active")
  })

