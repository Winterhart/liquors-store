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
        const body : requestBody = this.bodyBuilder(params);
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
        //TODO: Refactor this
        let adv : string = '';

        //Handle Country
        if (parameters.country !== undefined && parameters.country.length > 0) {
            adv = this.encapsulateAdvTerm(SearchCriteriaMapping.country, [parameters.country]);
        }


        //Handle search with price
        let priceRange : string = parameters.priceRange[0] + '..' + parameters.priceRange[1];
        if(adv.length > 0){
            adv = adv + " AND " + this.encapsulateAdvTerm(SearchCriteriaMapping.price, [priceRange]);
        }else{
            adv = this.encapsulateAdvTerm(SearchCriteriaMapping.price, [priceRange]);
        } 

        //Handle Availability
        if(parameters.isAvailable != undefined && parameters.isAvailable != null){
            let availabilityCriteria : string[] = [];
            if(parameters.isAvailable){
                availabilityCriteria.push(SearchCriteriaMapping.inStore);
                availabilityCriteria.push(SearchCriteriaMapping.online);
            }else{
                availabilityCriteria.push(SearchCriteriaMapping.comingSoon);
            }

            if (adv.length > 0) {
                adv = adv + " AND " + this.encapsulateAdvTerm(SearchCriteriaMapping.disponibility, availabilityCriteria);
            } else {
                adv = this.encapsulateAdvTerm(SearchCriteriaMapping.disponibility, availabilityCriteria);
            } 
        }

        //Handle Category
        if (parameters.categorie != undefined && parameters.categorie != null) {
            let categorieCriteria: string[] = [];
            if (parameters.categorie === 'Wine') {
                categorieCriteria.push('Vin rouge');
                categorieCriteria.push('Vin Blanc');
                categorieCriteria.push('Vin Rosé');

            } else if(parameters.categorie === 'Beer' ) {
                //TODO: Refactor this... 
                categorieCriteria.push('Bière');

                categorieCriteria.push('Bière ambrée de type Ale');
                categorieCriteria.push('Bière blonde de type Ale');
                categorieCriteria.push('Bière brune de type Ale');
                categorieCriteria.push('Bière noire de type Ale');
                categorieCriteria.push('Bière dorée de type Ale');
                categorieCriteria.push('Bière blanche de type Ale');
                categorieCriteria.push('Bière rousse de type Ale');


                categorieCriteria.push('Bière dorée de type Lager');
                categorieCriteria.push('Bière rousse de type Lager');
                categorieCriteria.push('Bière ambrée de type Lager');
                categorieCriteria.push('Bière blonde de type Lager');
                categorieCriteria.push('Bière brune de type Lager');
                categorieCriteria.push('Bière noire de type Lager');
                categorieCriteria.push('Bière blanche de type Lager');

                categorieCriteria.push('Bière dorée de type spontanée');
                categorieCriteria.push('Bière rousse de type spontanée');
                categorieCriteria.push('Bière ambrée de type spontanée');
                categorieCriteria.push('Bière blonde de type spontanée');
                categorieCriteria.push('Bière brune de type spontanée');
                categorieCriteria.push('Bière noire de type spontanée');
                categorieCriteria.push('Bière blanche de type spontanée');
                
            }else{
                categorieCriteria.push('spitueux');
            }

            if (adv.length > 0) {
                adv = adv + " AND " + 
                this.encapsulateAdvTerm(SearchCriteriaMapping.category, categorieCriteria);
            } else {
                adv =
                 this.encapsulateAdvTerm(SearchCriteriaMapping.category, categorieCriteria);
            }
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

        return buildString;
    }
}

