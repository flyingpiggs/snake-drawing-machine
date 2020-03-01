
//let paragraphs = document.getElementsByTagName( "p" );

//paragraphs[0].innerHTML = "Hello!";  

function DisplayWeird() {

    let bodyp = document.getElementById( "bodyp" );
    let goodElements = document.getElementsByClassName("good");
    let weirdElements = document.getElementsByClassName("weird");
    let badElements = document.getElementsByClassName("bad");
    let weirdButton = document.getElementById( "displayWeird" );
    let goodButton = document.getElementById( "displayGood" );
    let badButton = document.getElementById( "displayBad" );

    goodElements[0].style.display = "none";
    goodElements[1].style.display = "none";
    goodElements[2].style.display = "none";
    badElements[0].style.display = "none";
    weirdElements[0].style.display = "block";
    weirdElements[1].style.display = "block";
    weirdButton.style.display = "none"; 
    badButton.style.display = "inline"; 
    goodButton.style.display = "inline";
    bodyp.style.color = "DarkSalmon";
    bodyp.style.backgroundImage = 'url("assets/cheesecake_pic4.jpg")';
    bodyp.style.backgroundRepeat = "repeat"; 
}

function DisplayGood() {

    let bodyp = document.getElementById( "bodyp" );   
    let goodElements = document.getElementsByClassName("good");
    let weirdElements = document.getElementsByClassName("weird");
    let badElements = document.getElementsByClassName("bad");
    let weirdButton = document.getElementById( "displayWeird" );
    let goodButton = document.getElementById( "displayGood" );
    let badButton = document.getElementById( "displayBad" );

    goodElements[0].style.display = "block";
    goodElements[1].style.display = "block";
    goodElements[2].style.display = "block";
    badElements[0].style.display = "none";
    weirdElements[0].style.display = "none";
    weirdElements[1].style.display = "none";
    weirdButton.style.display = "inline"; 
    badButton.style.display = "inline"; 
    goodButton.style.display = "none";
    bodyp.style.color = "DarkTurquoise";
    bodyp.style.backgroundImage = "url('assets/cheesecake_pic8.jpg'), url('assets/cheesecake_pic9.jpg')"; 
    bodyp.style.backgroundRepeat = "no-repeat, repeat";
}

function DisplayBad() {

    let bodyp = document.getElementById( "bodyp" );
    let goodElements = document.getElementsByClassName("good");
    let weirdElements = document.getElementsByClassName("weird");
    let badElements = document.getElementsByClassName("bad");
    let weirdButton = document.getElementById( "displayWeird" );
    let goodButton = document.getElementById( "displayGood" );
    let badButton = document.getElementById( "displayBad" );

    goodElements[0].style.display = "none";
    goodElements[1].style.display = "none";
    goodElements[2].style.display = "none";
    badElements[0].style.display = "block";
    weirdElements[0].style.display = "none";
    weirdElements[1].style.display = "none";
    weirdButton.style.display = "inline"; 
    badButton.style.display = "none"; 
    goodButton.style.display = "inline";
    bodyp.style.color = "DarkSlateGrey"; 
    bodyp.style.backgroundImage = "url('assets/cheesecake_pic1.jpg'), url('assets/cheesecake_pic3.jpg')";
    bodyp.style.backgroundRepeat = "no-repeat, repeat"; 
}

function showBetter() {
  let betterText = document.getElementById("better");
  let bodyp = document.getElementById( "bodyp" );
  let paragraphs = document.getElementsByTagName("p");
  let images = document.getElementsByTagName("img");
  let size = paragraphs.length;

  let i;
  for ( i = 0; i < size; i++ ) {
    paragraphs[i].style.display = "none";
  }

  size = images.length;
  for ( i = 0; i < size; i++ ) {
    images[i].style.display = "none";
  }

  betterText.style.display = "block";
  betterText.style.color = "Violet";
  bodyp.style.backgroundImage = "url('assets/fat_pic6.jpg')";
  bodyp.style.backgroundRepeat = "no-repeat"    
}
