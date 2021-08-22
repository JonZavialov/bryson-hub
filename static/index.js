const PORT = 25565
const URL = `http://localhost:${PORT}`

function checkID(id){
    if(!id){
        window.location.replace("/404")
    }

    let apiURL = `https://www.googleapis.com/youtube/v3/videos?part=id&id=${ id }&key=AIzaSyADFjypT-DMqC9M06DtWzCRtBy4Z_ucVco`
    let response = httpGet(apiURL)
    let videoPresent= response.pageInfo.totalResults
    
    if(videoPresent == 0){
        window.location.replace("/404")
    }
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}