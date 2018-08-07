class VendingMachine {
    constructor() {
        this.transactionTotal = 0
        this.acceptableCurrency = {
            quarter: .25,
            dime: .1,
            nickel: .05
        }
        this.foodItems = [
            {
                id: 'a1',
                img: "./assets/images/fritos-spicy-jalapeno.png",
                price: 1.25,
                quantity: 10
            },
            {
                id: 'a2',
                img: "./assets/images/cool-ranch.jpg",
                price: 2.00,
                quantity: 1
            },
            {
                id: 'a3',
                img: "./assets/images/bbq-chippies.webp",
                price: .75,
                quantity: 15
            }
        ]
        this.machineTotal = 10
    }

    addMoney(coin) {
        //validate coin
        //increase total 
        //return total
    }
    vend(item) {
        let newFood = this.foodItems.find(food => food.id == item);
        if (this.transactionTotal >= newFood.price && newFood.quantity > 0) {
            newFood.quantity--;
            this.transactionTotal -= newFood.price;
            this.machineTotal += newFood.price;
            return newFood.id;
        } else {
            return 'No such item';
        }

        //find item
        //if total >= item.price && item.quantity > 0
        //item.quantity -- 
        //transactionTotal -= item.price
        //machineTotal += item.price
        //return item.img
    }

    getRemainder() {
        return this.transactionTotal
    }

    giveChange() {
        //transactionTotal = 0
    }
    changePrice() {

    }
    addItem() {

    }
    removeItem() {

    }
    restock() {

    }
    getItems() {
        return this.foodItems;
    }
}


export default VendingMachine