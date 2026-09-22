let potteryForSale = []

export const toSellOrNotToSell = (potteryItem) => {
    if (potteryItem.cracked === false) {
        if (potteryItem.weight >= 6) {
            potteryItem.price = 40
            } else {
            potteryItem.price = 20
            }
        potteryForSale.push(potteryItem)
        }
    return potteryItem
    }

export const usePottery = () => {
    return structuredClone(potteryForSale)
    }
