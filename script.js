document.addEventListener('DOMContentLoaded', function () {
function testPrint(){
  console.log("TestPrint()")
}
function gradientFill() {
  const mainButton = document.querySelector("#mainTextButton");
  
  mainButton.style.background = "linear-gradient(to right, rgba(139, 52, 46, 0.8), rgba(243, 171, 64, 0.8))";
  mainButton.style.setProperty('-webkit-background-clip', 'text');
  mainButton.style.setProperty('-webkit-text-fill-color', 'transparent');
  mainButton.style.setProperty('background-clip', 'text');
  mainButton.style.setProperty('text-fill-color', 'transparent');
  mainButton.computedStyleMap.background = "rgb(255, 255, 255, 0.2)";
}

const params = new URLSearchParams(window.location.search); //parse params
const p = params.get("mainButtonText"); //get p param
console.log(p)
if(p==null){
  var signedIn = "Sign-in/up";
}else{
  var signedIn = p;
}
const mainButton = document.querySelector("#mainTextButton");
if(mainButton.textContent==signedIn){
  console.log("")
}else{
   mainButton.textContent=signedIn;
  gradientFill()
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

 function refresh(){
    window.location.href="https://r-nd-s.github.io/ROAMMAX"
 }
mainButton.addEventListener('mouseover', () => {
  mainButton.style.background = 'rgba(255, 255, 255, 0.4)';
  gradientFill();
});

mainButton.addEventListener('mouseout', () => {
  mainButton.style.background = 'rgba(255, 255, 255, 0.2)';
  gradientFill();
});
});