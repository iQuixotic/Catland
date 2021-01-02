class Rating {

  private age: Number;
  private cuddly: Number;
  private playful: Number;
  private clean: Number;
  private dog_friendly: boolean;

    constructor(obj) {
        if(!obj) {
            return;   
        }    
        this.age = obj.age;
        this.cuddly = obj.cuddly;
        this.playful = obj.playful;
        this.clean = obj.clean;
        this.dog_friendly = obj.dog_friendly;
    }    
}

export default Rating;