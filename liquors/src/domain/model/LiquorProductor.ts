export class LiquorProductor {
    name: string;
    country: string;
    region: string;
    year: string;
    cepage?: string;

    constructor(name: string, country: string, region: string, year: string, cepage?: string){
        this.name = name;
        this.country = country;
        this.region = region;
        this.year = year;
        this.cepage = cepage;
    }
}