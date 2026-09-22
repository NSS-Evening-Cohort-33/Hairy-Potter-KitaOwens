
let itemID = 0

export const makePottery = (shape, weight, height) => {
    itemID += 1
    const potteryItem = {
        shape: shape,
        weight: weight,
        height: height,
        id: itemID
    }
    
    return potteryItem
}
