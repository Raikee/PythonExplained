/**
 * Created by Josh on 1/29/16.
 */

//class for manipulating lines of a python program
class line {
    public statement:string;
    public tag:string;
    public explanation:string;

    constructor(input:string) {
        this.statement = input;
    }

    public settag(input:string) {
        this.tag = input;
    }

    public setexplain(input:string) {
        this.explanation = input;
    }
}



