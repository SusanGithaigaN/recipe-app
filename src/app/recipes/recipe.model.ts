export class Recipe{
    // assign types for recipe contents
    public name: string;
    // add recipe description
    public description: string;
    // add image
    public imagePath: string;
    
    // add a constructor to instantiate with anew keyword and pass arguments to constructoe
    constructor(name: string, desc: string, imagePath: string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}