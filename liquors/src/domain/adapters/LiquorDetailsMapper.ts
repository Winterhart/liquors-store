import { baseMapper } from "./baseMapper";
import { LiquorDetails } from "../model/LiquorDetails";
import { LiquorProductorMapper} from './LiquorProductorMapper';
import { LiquorProductor } from "../model/LiquorProductor";

export class LiquorDetailsMapper extends baseMapper {
    convertToDomainObj(rawJSON) : LiquorDetails {

        const liquorProductorMapper: LiquorProductorMapper =
            new LiquorProductorMapper();

        const bouchonType : string  = rawJSON.raw.tpbouchon;
        const category: string = rawJSON.raw.tpcategorie;
        const color : string = rawJSON.raw.tpcouleur;
        const size : string = rawJSON.raw.tpformat;
        const averagePrice: string = rawJSON.raw.tpprixbande;
        const productor : LiquorProductor = 
        liquorProductorMapper.convertToDomainObj(rawJSON);

        const score : number = rawJSON.score;
        const available: string = rawJSON.raw.tpdisponibilite;

        const liquorDetails : LiquorDetails =
            new LiquorDetails(bouchonType, category, color,
                size, averagePrice, productor, score, available);
        
        return liquorDetails;

    }
}