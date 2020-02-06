
//let paragraphs = document.getElementsByTagName( "p" );

//paragraphs[0].innerHTML = "Hello!";  

function DisplayWeird() {
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
}

function DisplayGood() {

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
}

function DisplayBad() {

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
}
