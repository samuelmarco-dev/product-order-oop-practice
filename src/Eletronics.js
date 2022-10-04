import TaxItem from "./TaxItem";

export default class Eletronics extends TaxItem {
    constructor(description, price) {
        super("Eletronics", description, price);
        this.tax = 0.3;
    }

    getTax() {
        return this.tax;
    }
}
