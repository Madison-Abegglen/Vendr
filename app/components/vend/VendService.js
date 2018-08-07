//private parts
import VendingMachine from '../../models/VendingMachine.js'

const vendingMachine = new VendingMachine();

//public to controller
class VendService {
    constructor() {

    }
    getItems() {
        return vendingMachine.getItems();
    }
    addMoney(type) {
        console.log('service: ', type)
        //confirm currency is acceptable
        if (vendingMachine.acceptableCurrency[type]) {
            //add to total
            vendingMachine.transactionTotal += vendingMachine.acceptableCurrency[type]
        }
        return vendingMachine.transactionTotal.toFixed(2)
    }
    vend(item) {
        let vendItem = vendingMachine.vend(item);
        return vendItem
    }

    getRemainder() {
        let remainder = vendingMachine.getRemainder();
        return remainder;
    }
}


export default VendService