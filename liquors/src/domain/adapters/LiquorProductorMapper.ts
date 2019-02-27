import { baseMapper } from "./baseMapper";
import { LiquorProductor } from "../model/LiquorProductor";

export class LiquorProductorMapper extends baseMapper{
    convertToDomainObj(rawJSON) : LiquorProductor {
        const name: string = rawJSON.raw.tpproducteur;
        const country: string = rawJSON.raw.tppays;
        const region: string = (rawJSON.raw.tpregion === undefined) ? '' : rawJSON.raw.tpregion ;
        const year: string = (rawJSON.raw.tpmillesime === undefined) ? '' : rawJSON.raw.tpmillesime ;
        const cepage: string = (rawJSON.raw.tpcepagenomsplitgroup == undefined) ? '' : rawJSON.raw.tpcepagenomsplitgroup;

        const productor: LiquorProductor
            = new LiquorProductor(name, country, region, year,
                cepage);

        return productor;

    }
}