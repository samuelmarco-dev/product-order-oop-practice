import TaxItem from "./TaxItem";
import Item from "./Item";

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
        if(!this.items.length) return 0;
        else {
            return this.items.reduce((sum, item)=> {
                if(item instanceof Item) return sum += item.price;
                return sum;
            }, 0);
        }
    }

    getTaxes() {
        if(!this.items.length) return 0;
        else {
            return this.items.reduce((sum, item)=> {
                if(item instanceof TaxItem) return sum + item.calculateTax();
                return sum;
            }, 0);
        }
    }
}
