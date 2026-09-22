
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell } from './PotteryCatalog.js'
import { potteryList } from './PotteryList.js'

let mug = makePottery ("mug", 2, 6)
let bowl = makePottery ("bowl", 3, 5)
let plate = makePottery ("plate",2,1)
let mug02 = makePottery ("mug", 3, 7)
let vase = makePottery ("vase", 7, 7)

firePottery(mug, 2300)
firePottery(bowl, 1400)
firePottery(plate, 1200)
firePottery(mug02, 2400)
firePottery(vase, 2200)

toSellOrNotToSell(mug)
toSellOrNotToSell(bowl)
toSellOrNotToSell(plate)
toSellOrNotToSell(mug02)
toSellOrNotToSell(vase)

const potteryArticle = document.querySelector("#potteryList")

potteryArticle.innerHTML = potteryList()
