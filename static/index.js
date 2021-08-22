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