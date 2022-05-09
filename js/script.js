
var myIndex = 0;
carousel();
carousel_1();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel,20000); // Change image every 2 seconds
}


function carousel_1() {
  var i;
  var x = document.getElementsByClassName("mySlides_2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel_1, 20000); // Change image every 2 seconds
}



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}


let slideIndex_2 = 1;
showSlides_2(slideIndex_2);

// Next/previous controls
function plusSlides_2(n) {
  showSlides_2(slideIndex_2 += n);
}

// Thumbnail image controls
function currentSlide_2(n) {
  showSlides_2(slideIndex_2 = n);
}

function showSlides_2(n) {
  let e;
  let slides_2 = document.getElementsByClassName("mySlides_2");
  if (n > slides_2.length) {slideIndex_2 = 1}
  if (n < 1) {slideIndex_2 = slides_2.length}
  for (e = 0; e < slides_2.length; e++) {
    slides_2[e].style.display = "none";
  }
  slides_2[slideIndex_2-1].style.display = "block";
}







var counterContainer = document.querySelector(".website-counter");
// var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
// resetButton.addEventListener("click", () => {
//   visitCount = 1;
//   localStorage.setItem("page_view", 1);
//   counterContainer.innerHTML = visitCount;
// });




function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

function closeRightMenu() {
  document.getElementById("rightMenu").style.display = "none";
}


function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("We and selected third parties use cookies or similar technologies for technical purposes and, with your consent, also for other purposes (experience improvement and measurement) as specified in the","BOOOOOOOO");
	user = prompt("You can freely give, refuse or revoke your consent at any time.");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}