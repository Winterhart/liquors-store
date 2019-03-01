import axios from 'axios'
import { SearchParamState } from '../../application/state/SearchParamState';
import { SearchCriteriaMapping } from '../SearchCriteriaMapping';

interface requestBody {
    q: string,
    numberOfResults:number,
    aq?: string,
    partialMatch?: boolean,
    sortCriteria?: string
}

export class LiquorsFinder {

    public findLiquors(params: SearchParamState){
        params.country = ['Allemagne'];
        const body : requestBody = this.bodyBuilder(params);
        console.log('body');
        console.log(body);
        return axios.request({
            url: "https://cloudplatform.coveo.com/rest/search",
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + process.env.REACT_APP_API_TOKEN
            },
            data:JSON.stringify(body)
        });
    }

    private bodyBuilder(parameters: SearchParamState) : requestBody {
        const body : requestBody = {
            q: parameters.searchText,
            numberOfResults: parameters.numberOfResult,
        }

        body.aq = this.advanceQueryBuilder(parameters);

        return body;
    }

    private advanceQueryBuilder(parameters: SearchParamState) : string{

        let adv : string = '';
        if (parameters.country !== undefined && parameters.country.length > 0) {
            adv = this.encapsulateAdvTerm(SearchCriteriaMapping.country, parameters.country);
        }


        


        return adv;
    }

    private encapsulateAdvTerm(criteria: string, parameters : string[]){
        return "@" + criteria + "==" +
            "(" + this.parentheiseBuilder(parameters) + ")";
    }

    private parentheiseBuilder(allString : string[]) : string{
        let buildString : string = '';
        for (let index = 0; index < allString.length; index++) {
           buildString = buildString + "\"" + allString[index] + "\"" + ",";
        }

        buildString = buildString.substr(0, buildString.length-1);
        console.log(buildString);

        return buildString;
    }
}

