import axios from 'axios'
import { QueryResult } from '../../domain/model/QueryResult';
import { QueryResultMapper } from '../../domain/adapters/QueryResultMapper';


export function getLiquors(textSearch: string) : QueryResult{
    const requestURL = buildURI()  + textSearch;
    const adatper : QueryResultMapper = new QueryResultMapper();
    let query : QueryResult = new QueryResult(0, 0, []);
    axios.request({
        url: requestURL,
        method: 'get',
    }).then(response => {
        query = adatper.convertToDomainObj(response.data);
        
    })
    return query;
}

export function buildURI(): string{
    const routeURL: string = "https://cloudplatform.coveo.com/rest/search?" +
     "access_token=" + process.env.REACT_APP_API_TOKEN + "&q=";
     console.log("route URL: " + routeURL);
    return routeURL
}