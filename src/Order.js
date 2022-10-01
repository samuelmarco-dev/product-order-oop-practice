import Item from "./Item";
import TaxItem from "./TaxItem";

export default class Order {
    constructor() {
        this.items = [];
    }

    addItem(item) { 
        if(item instanceof Item) {
            this.items.push(item);
        }
    }

    getTotal() { 
        let sum = 0;

        if(!this.items.length) return sum;
        else {
            this.items.forEach(item=> {
                if(item instanceof Item) {
                    sum += item.price
                }
            });
            return sum;
        }
    }

    getTaxes() {
        let sum = 0;
        
        if(!this.items.length) return sum;
        else {
            this.items.forEach(item => {
                if(item instanceof Item) {
                    sum += this.calculeTaxes(item);
                }
            });
            return sum;
        }
    }

    calculeTaxes(item) {
        const { category, description, price } = item;
        let taxes = 0;

        if(category === "Beer") taxes = 0.20;
        if(category === "Cigar") taxes = 0.25;
        if(category === "Eletronics") taxes = 0.3;

        return new TaxItem(category, description, price).calculeTax(taxes);
    }
}
