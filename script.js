function testPrint(){
  console.log("TestPrint()")
}
const signedIn = "Sign up/in"
const mainButton = document.querySelector("#mainTextButton");
if(mainButton.textContent==signedIn){
  console.log("")
}else{
   mainButton.textContent=signedIn;
}
const changeText = document.querySelector("#topBarText1");
const dropDownBox = document.querySelector("#dropDown");
dropDownBox.style.display = "none";

// changeText.textContent = "Contact-us ▶";
// dropDownBox.style.display = "none";  // Hide the dropdown

// changeText.addEventListener("click", function() {
//   if (changeText.textContent === "Contact-us ▶") {
//     changeText.textContent = "Contact-us ▼";
//     dropDownBox.style.display = "block";  // Show the dropdown
//   } else {
//     changeText.textContent = "Contact-us ▶";
//     dropDownBox.style.display = "none";  // Hide the dropdown
//   }
// });