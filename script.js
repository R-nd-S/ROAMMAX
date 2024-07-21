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
  //mainButtonText.style.background = "rgb(255, 255, 255, 0.2)";
}
function adjustStyles(){
  console.log('adjustStyles()')
  if (window.outerWidth <= 932) {
      const mainText = document.getElementById('mainText');
      const mainTextButton = document.getElementById('mainTextButton');
      const topBarText = document.getElementsByClassName('topBarText');
      const topBarBackground = document.getElementById('topBarWhiteBackground');
      const topBarId1 = document.getElementById('topBarText1');
      const topBarId2 = document.getElementById('topBarText2');
      const topBarId3 = document.getElementById('topBarText3');

      if (window.outerWidth <= 374) {
         //main text/button
          mainText.style.setProperty('font-size', "56px");
          mainTextButton.style.setProperty('font-size', "50px");
          mainTextButton.style.setProperty('left', '15%');
          mainText.style.setProperty('left', '2%');
          mainText.style.setProperty('top', '44%');
         //top bar text
          topBarBackground.style.setProperty('width', '34%');
          topBarId3.style.setProperty('width', '28%');
          for (let i = 0; i < topBarText.length; i++) {
             topBarText[i].style.setProperty('position', 'absolute');
            topBarText[i].style.setProperty('font-size', '20px');
            const val = ((i + 1) * 16)-13;
            const vall = val + "px"
            topBarText[i].style.setProperty('top', vall);
            topBarText[i].style.setProperty('right', '40px');
            console.log(topBarText[i].style.right);
            }
      } else if (window.outerWidth <= 424) {
          mainText.style.setProperty('font-size', "58px");
          mainTextButton.style.setProperty('font-size', "50px");
          mainTextButton.style.setProperty('left', '15%');
          mainText.style.setProperty('left', '8%');
          mainText.style.setProperty('top', '44%');
        topBarBackground.style.setProperty('width', '34%');
        topBarId3.style.setProperty('width', '28%');
        for (let i = 0; i < topBarText.length; i++) {
           topBarText[i].style.setProperty('position', 'absolute');
          topBarText[i].style.setProperty('font-size', '20px');
          const val = ((i + 1) * 18)-18;
          const vall = val + "px"
          topBarText[i].style.setProperty('top', vall);
          topBarText[i].style.setProperty('right', '54px');
          console.log(topBarText[i].style.right);
          }
      } else if (window.outerWidth <= 474) {
          mainText.style.setProperty('font-size', "64px");
          mainTextButton.style.setProperty('font-size', "54px");
          mainTextButton.style.setProperty('left', '19%');
          mainText.style.setProperty('left', '10%');
          mainText.style.setProperty('top', '42%');
        topBarBackground.style.setProperty('width', '34%');
        topBarId3.style.setProperty('width', '28%');
        for (let i = 0; i < topBarText.length; i++) {
           topBarText[i].style.setProperty('position', 'absolute');
          topBarText[i].style.setProperty('font-size', '20px');
          const val = ((i + 1) * 18)-18;
          const vall = val + "px"
          topBarText[i].style.setProperty('top', vall);
          topBarText[i].style.setProperty('right', '74px');
          console.log(topBarText[i].style.right);
          }
      } else if (window.outerWidth <= 769) {
        mainText.style.setProperty('font-size', "74px");
        mainTextButton.style.setProperty('font-size', "54px");
        mainTextButton.style.setProperty('left', '24%');
        mainText.style.setProperty('left', '14%');
        mainText.style.setProperty('top', '40%');
        topBarId1.style.setProperty('right', '32%');                           topBarId2.style.setProperty('right', '20%');                           topBarId3.style.setProperty('width', '10%');
    } else{
        mainText.style.setProperty('font-size', "800%");
        mainTextButton.style.setProperty('font-size', "400%");
        mainTextButton.style.setProperty('left', '14%');
        mainText.style.setProperty('left', '14%');
        mainText.style.setProperty('top', '34%');
    }
    if(window.innerWidth<=827){
      topLeftLogo.src = "img/image-rsmidk (1) (1).png";
      document.getElementById('topBarWhiteBackground').style.width = "50%";
      document.getElementById('topBarWhiteBackground').style.right = "0%";  
      document.getElementById('topBarText3').style.right = "4%";
    }
  }
}

const params = new URLSearchParams(window.location.search); //parse params
const p = params.get("mainButtonText"); //get p param
const mainButtonText = document.querySelector("#mainTextButtonText");
const mainButton = document.querySelector("#mainTextButton");
const changeText = document.querySelector("#topBarText1");
const dropDownBox = document.querySelector("#dropDown");
const topBar = document.querySelector("#topBar");
const topLeftLogo = document.querySelector("#topLeftLogo");
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
adjustStyles();
  
window.addEventListener('resize', adjustStyles);

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
