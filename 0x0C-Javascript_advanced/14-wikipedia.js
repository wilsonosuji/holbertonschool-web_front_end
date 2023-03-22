function createElement(data) {
    let x = document.createElement("p");                        
    let t = document.createTextNode(data);    
    x.appendChild(t);                                           
    document.body.appendChild(x); 
}

function queryWikipedia(callback) {
    let oReq = new XMLHttpRequest();
    oReq.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
    oReq.responseType = "json"
    oReq.onload = function () {
        let req = oReq.response;
        callback(req.query.pages[21721040].extract);
    }
    oReq.send();
}

queryWikipedia(createElement);