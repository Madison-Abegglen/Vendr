import VendService from './VendService.js'

//private parts
//variables outside of the exported class are not accessible
const vendService = new VendService()

function drawTotal(total) {
    document.getElementById('total').innerText = total
    //updates screen
}

function drawItems() {
    let items = vendService.getItems()
    //draw the items to the page 
    let template = ''
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        template += `
            <div class="food-item" onclick="app.controllers.vendController.vend('${item.id}')">
                <img src="${item.img}" alt="">
                <h3>${item.price}</h3>
            </div>
        `
    }
    document.getElementById('food').innerHTML = template
}

function drawVend() {

}

//public parts

//controllers are used for getting user input
//updating screen
//sending and recieving data from service 
class VendController {
    constructor() {
        drawItems();
    }

    vend(item) {
        let vendItem = vendService.vend(item);
        console.log(vendItem);
        this.getRemainder();
    }

    getRemainder() {
        let remainder = vendService.getRemainder();
        drawTotal(remainder);
    }

    //used to send money to service
    addMoney(cur) {
        console.log(cur)
        let total = vendService.addMoney(cur)
        console.log('return to controller: ', total)
        //used to send money to service
        drawTotal(total);
    }
}

export default VendController