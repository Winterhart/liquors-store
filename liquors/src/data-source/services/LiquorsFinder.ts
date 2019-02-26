import axios from 'axios'


export function getLiquors(textSearch: string){
    const requestURL = buildURI()  + textSearch;
    axios.request({
        url: requestURL,
        method: 'get',
    }).then(response => {
        const jsonD = response.data;
        console.log(jsonD);
        
    })


}

export function buildURI(): string{
    const routeURL: string = "https://cloudplatform.coveo.com/rest/search?" +
     "access_token=" + process.env.REACT_APP_API_TOKEN + "&q=";
     console.log("route URL: " + routeURL);
    return routeURL
}