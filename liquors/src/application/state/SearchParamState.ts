export interface SearchParamState {
    isAdvActive: boolean,
    searchText : string,
    numberOfResult : number,
    country? : string,
    categorie?:string,
    isAvailable?:boolean,
    priceRange: number[]
    
}