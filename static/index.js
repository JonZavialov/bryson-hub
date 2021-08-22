const PORT = 25565
const URL = `http://localhost:${PORT}`

function checkForID(id){
    if(!id){
        window.location.replace("/404");
    }
}