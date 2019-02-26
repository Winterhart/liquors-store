import { baseMapper } from "./baseMapper";
import { Liquor } from "../model/Liquor";
import { LiquorDetailsMapper } from "./LiquorDetailsMapper";
import { LiquorDetails } from "../model/LiquorDetails";

export class LiquorMapper extends baseMapper {

    convertToDomainObj(rawJSON) : Liquor[] {
        let liquors : Liquor[] = []

        const liquorDetailMapper : LiquorDetailsMapper =
            new LiquorDetailsMapper();

        
        for (let num = 0; num < rawJSON.length; num++) {
            const name : string = rawJSON[num].Title;
            const url : string = rawJSON[num].Uri;
            const image: string = rawJSON[num].raw.tpthumbnailuri;
            const price: number = rawJSON[num].raw.tpprixnum;
            const details : LiquorDetails = 
            liquorDetailMapper.convertToDomainObj(rawJSON[num]);

            const liquor : Liquor = new Liquor(name, url,
                image, price, details);

            liquors.push(liquor);
        }
        return liquors;

    }
}