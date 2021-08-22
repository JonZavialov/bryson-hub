const PORT = 25565
const URL = `http://localhost:${PORT}`

function checkID(id){
    if(!id){
        window.location.replace("/404?error=NoVideoID")
    }else{
        let apiURL = `https://www.googleapis.com/youtube/v3/videos?part=id&id=${ id }&key=AIzaSyADFjypT-DMqC9M06DtWzCRtBy4Z_ucVco`
        let response = httpGet(apiURL)
        let videoPresent= response.pageInfo.totalResults
        
        if(videoPresent == 0){
            window.location.replace("/404?error=IDInvalid")
        }
    }
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}

function parseURL(url){
    let parsedURL
    if(url.indexOf("?v=") != -1 && url.length == 43){
        parsedURL = url.substring(url.indexOf("?v=")+3,url.length)
        window.location.replace(`/watch?id=${parsedURL}`)
    }else if(url.indexOf("?v=") != -1 && url.indexOf("&amp;ab") != -1){
        parsedURL = url.substring(url.indexOf("?v=")+3,url.indexOf("&amp;ab"))
        window.location.replace(`/watch?id=${parsedURL}`)
    }else{
        window.location.replace("/404?error=InvalidURL")
    }
}

function konami(){
    // a key map of allowed keys
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        65: 'a',
        66: 'b'
    };
  
  // the 'official' Konami Code sequence
  var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
  
  // a variable to remember the 'position' the user has reached so far.
  var konamiCodePosition = 0;
  
  // add keydown event listener
  document.addEventListener('keydown', function(e) {
    // get the value of the key code from the key map
    var key = allowedKeys[e.keyCode];
    // get the value of the required key from the konami code
    var requiredKey = konamiCode[konamiCodePosition];
  
    // compare the key with the required key
    if (key == requiredKey) {
  
      // move to the next key in the konami code sequence
      konamiCodePosition++;
  
      // if the last key is reached, activate cheats
      if (konamiCodePosition == konamiCode.length) {
        activateCheats();
        konamiCodePosition = 0;
      }
    } else {
      konamiCodePosition = 0;
    }
  });
}

function activateCheats() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}