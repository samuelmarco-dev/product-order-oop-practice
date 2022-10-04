import TaxItem from "./TaxItem";

export default class Cigar extends TaxItem {
    constructor(description, price) {
        super("Cigar", description, price);
        this.tax = 0.25;
    }

    getTax() {
        return this.tax;
    }
}
