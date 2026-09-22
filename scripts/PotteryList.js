import { usePottery } from './PotteryCatalog.js'

export let potteryList = () => {
    let potteryHTML = '';

    for (let potteryItem of usePottery()) {
        potteryHTML += `
            <section class="pottery" id="pottery__id--${potteryItem.id}">
                <h2 class="pottery__shape">${potteryItem.shape}</h2>
                <div class="pottery__properties">
                    Item weighs ${potteryItem.weight} grams and is ${potteryItem.height} cm in height
                </div>
                <div class="pottery__price">Price is $${potteryItem.price}</div>
            </section>
        `
    }
    return potteryHTML
}
