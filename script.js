document.addEventListener('DOMContentLoaded', function () {
function testPrint(){
  console.log("TestPrint()")
}
function refresh(){
    window.location.href="https://r-nd-s.github.io/ROAMMAX"
 }
function gradientFill() {
  const mainButtonText = document.querySelector("#mainTextButtonText");
  
  mainButtonText.style.background = "linear-gradient(to right, rgba(139, 52, 46, 0.8), rgba(243, 171, 64, 0.8))";
  mainButtonText.style.setProperty('-webkit-background-clip', 'text');
  mainButtonText.style.setProperty('-webkit-text-fill-color', 'transparent');
  mainButtonText.style.setProperty('background-clip', 'text');
  mainButtonText.style.setProperty('text-fill-color', 'transparent');
  mainButtonText.computedStyleMap.background = "rgb(255, 255, 255, 0.2)";
}

const params = new URLSearchParams(window.location.search); //parse params
const p = params.get("mainButtonText"); //get p param
const mainButtonText = document.querySelector("#mainTextButtonText");
const mainButton = document.querySelector("#mainTextButton");
const changeText = document.querySelector("#topBarText1");
const dropDownBox = document.querySelector("#dropDown");
if(p==null){
  var signedIn = "Sign-in/up";
}else{
  var signedIn = p;
}
if(mainButtonText.textContent==signedIn){
  console.log("")
}else{
     mainButtonText.textContent=signedIn;
  gradientFill()
}

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

mainButton.addEventListener('mouseover', () => {
  mainButton.style.background = 'rgba(255, 255, 255, 0.4)';
  gradientFill();
});

mainButton.addEventListener('mouseout', () => {
  mainButton.style.background = 'rgba(255, 255, 255, 0.2)';
  gradientFill();
});
  // Retrieve
  const loggedInBoolien = localStorage.loggenIn;
  // alert(loggedInBoolien);
  if(loggedInBoolien==true){
    window.location.href="https://r-nd-s.github.io/ROAMMAX/#"
  }
});