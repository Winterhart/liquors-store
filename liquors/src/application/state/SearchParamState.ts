export interface SearchParamState {
    isAdvActive: boolean,
    searchText : string,
    numberOfResult : number,
    country? : string[],
    priceMax?: number,
    priceMin?: number,
    categorie?:string,
    isAvailable?:boolean,
    priceRange: number[]
    
}