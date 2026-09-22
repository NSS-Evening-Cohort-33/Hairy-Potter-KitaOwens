
export const firePottery = (potteryItem, temperature) => {
            potteryItem.fired = true
            if (temperature > 2200) {
                potteryItem.cracked = true
            } else {
                potteryItem.cracked = false
            }
    return potteryItem
}
