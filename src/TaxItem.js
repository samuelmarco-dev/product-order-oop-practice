import Item from "./Item";

export default class TaxItem extends Item {
    constructor(category, description, price) {
        if(this.constructor === TaxItem) {
            throw new Error("Abstract classes cant't be instantiated!");
        }

        super(category, description, price);
    }

    calculateTax() {
        return this.price * this.getTax();
    }

    //overlap in more specific classes -> Polimorfismo
    getTax() {
        return 0;
    }
}
