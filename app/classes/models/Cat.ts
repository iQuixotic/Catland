// imports
import { Rating } from '../';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
class Cat {

  private picture: string;
  private name: string;
  private ratings_id: Rating;

    constructor(obj) {
        if(!obj) {
            return;   
        }    
        this.picture = obj.picture;
        this.name = obj.name;
        this.ratings_id = obj._id;
    }    
}

export default Cat;