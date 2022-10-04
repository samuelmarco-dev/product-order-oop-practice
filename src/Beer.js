import TaxItem from "./TaxItem";

export default class Beer extends TaxItem {
    constructor(description, price) {
        super("Beer", description, price);
        this.tax = 0.2;
    }

    getTax() {
        return this.tax;
    }
}
