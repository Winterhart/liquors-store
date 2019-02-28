import axios from 'axios'


export function getLiquors(textSearch: string)  {
    return axios.request({
        url: "https://cloudplatform.coveo.com/rest/search",
        method: 'post',
        headers: {
            'Content-Type':'application/json', 
            'Authorization': "Bearer " + process.env.REACT_APP_API_TOKEN  },
        data: {
            q: textSearch
        }
    });
}

