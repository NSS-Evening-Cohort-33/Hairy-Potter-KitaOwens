
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell } from './PotteryCatalog.js'

let mug = makePottery ("mug", 2, 6)
let bowl = makePottery ("bowl", 3, 5)
let plate = makePottery ("plate",2,1)
let mug02 = makePottery ("mug", 3, 7)
let vase = makePottery ("vase", 1, 7)

firePottery(mug, 2300)
firePottery(bowl, 1200)
firePottery(plate, 1400)
firePottery(mug02, 2200)
firePottery(vase, 2400)

toSellOrNotToSell(mug)
toSellOrNotToSell(bowl)
toSellOrNotToSell(plate)
toSellOrNotToSell(mug02)
toSellOrNotToSell(vase)

console.log(mug)
console.log(bowl)
console.log(plate)
console.log(mug02)
console.log(vase)

