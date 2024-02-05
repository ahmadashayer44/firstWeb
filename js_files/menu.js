var shouldRunDisAnimation1 = true;
var shouldRunDisAnimation2 = true;
var shouldRunDisAnimation3 = true;

function backToPage() {
  window.location.href = "showMenuForUsers.html";
}

function showAnimation1() {
  var box2Element = document.querySelector(".forB1");
  var box2 = document.querySelector(".box1");

  box2Element.style.visibility = "visible";
  box2Element.style.opacity = "1";
  box2.style.transform = "scale(1.5)";
  box2.style.zIndex = "2";
  document.body.style.background = "url(../wallpaper_files/4690.jpg)";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";
}

function disAnimation1() {
  if (shouldRunDisAnimation1) {
    var box2Element = document.querySelector(".forB1");
    var box2 = document.querySelector(".box1");

    box2Element.style.visibility = "hidden";
    box2Element.style.opacity = "0";
    box2.style.transform = "scale(1)";
    box2.style.zIndex = "0";
    document.body.style.background =
      "url(../wallpaper_files/close-up-blue-purple-smoke-swirling-against-black-backdrop.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
  }
}

function showAnimation2() {
  var box2Element = document.querySelector(".forB2");
  var box2 = document.querySelector(".box2");

  box2Element.style.visibility = "visible";
  box2Element.style.opacity = "1";
  box2.style.transform = "scale(1.5)";
  box2.style.zIndex = "2";
  document.body.style.background = "url(../wallpaper_files/35663.jpg)";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";
}

function disAnimation2() {
  if (shouldRunDisAnimation2) {
    var box2Element = document.querySelector(".forB2");
    var box2 = document.querySelector(".box2");

    box2Element.style.visibility = "hidden";
    box2Element.style.opacity = "0";
    box2.style.transform = "scale(1)";
    box2.style.zIndex = "0";
    document.body.style.background =
      "url(../wallpaper_files/close-up-blue-purple-smoke-swirling-against-black-backdrop.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
  }
}
function showAnimation3() {
  var box2Element = document.querySelector(".forB3");
  var box2 = document.querySelector(".box3");

  box2Element.style.visibility = "visible";
  box2Element.style.opacity = "1";
  box2.style.transform = "scale(1.5)";
  box2.style.zIndex = "2";
  document.body.style.background = "url(../wallpaper_files/123.jpg)";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";
}

function disAnimation3() {
  if (shouldRunDisAnimation3) {
    var box2Element = document.querySelector(".forB3");
    var box2 = document.querySelector(".box3");

    box2Element.style.visibility = "hidden";
    box2Element.style.opacity = "0";
    box2.style.transform = "scale(1)";
    box2.style.zIndex = "0";
    document.body.style.background =
      "url(../wallpaper_files/close-up-blue-purple-smoke-swirling-against-black-backdrop.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
  }
}

function contactPage() {
  window.location.href = "../html_files/contactPage.html";
}

function redirectToSignInPage() {
  window.location.href = "/Movies_Ahmad_Ashayer/html_files/signInPage.php";
}
function favoriteMovies() {
  window.location.href = "/Movies_Ahmad_Ashayer/html_files/favoritePage.php";
}
function turkishMovies() {
  shouldRunDisAnimation2 = false;
  var box2Element = document.querySelector(".forB2");
  var turkishBox = document.querySelector(".boxForTurkish");
  var searchForTurkish = document.querySelector(".Search2");
  var boxForHidden = document.querySelector(".box");
  var boxForHidden2 = document.querySelector(".boxForAll");

  turkishBox.style.opacity = "1";
  boxForHidden.style.opacity = "0";
  box2Element.style.visibility = "hidden";
  turkishBox.style.visibility = "visible";
  searchForTurkish.style.visibility = "visible";
  boxForHidden.style.visibility = "hidden";
  boxForHidden2.style.visibility = "hidden";
  document.body.style.background = "url(../wallpaper_files/35663.jpg)";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";
}

function arabicMovies() {
  shouldRunDisAnimation3 = false;
  var box2Element = document.querySelector(".forB3");

  var arabicBox = document.querySelector(".boxForArapian");
  var searchForArabic = document.querySelector(".Search3");
  var boxForHidden = document.querySelector(".box");
  var boxForHidden2 = document.querySelector(".boxForAll");

  arabicBox.style.opacity = "1";
  boxForHidden.style.opacity = "0";
  box2Element.style.visibility = "hidden";
  arabicBox.style.visibility = "visible";
  searchForArabic.style.visibility = "visible";
  boxForHidden.style.visibility = "hidden";
  boxForHidden2.style.visibility = "hidden";
  document.body.style.background = "url(../wallpaper_files/123.jpg)";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";
}

function showMovies() {
  shouldRunDisAnimation1 = false;
  var americanBox = document.querySelector(".boxForAmerican");
  var searchForAmerican = document.querySelector(".Search1");
  var box2Element = document.querySelector(".forB1");
  var boxForHidden = document.querySelector(".box");
  var boxForHidden2 = document.querySelector(".boxForAll");

  boxForHidden.style.opacity = "0";
  americanBox.style.opacity = "1";
  box2Element.style.visibility = "hidden";
  americanBox.style.visibility = "visible";
  searchForAmerican.style.visibility = "visible";
  boxForHidden.style.visibility = "hidden";
  boxForHidden2.style.visibility = "hidden";
  document.body.style.background = "url(../wallpaper_files/4690.jpg)";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";
}

function addMovies() {
  window.location.href = "../html_files/addMovies.html";
}
function inbox() {
  window.location.href = "../html_files/inboxMails.html";
}
