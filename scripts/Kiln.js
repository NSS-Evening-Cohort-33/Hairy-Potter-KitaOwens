export const firePottery = (pottery, temp) => {
    pottery.fired = true

    if (temperature > 2200) {
        pottery.cracked = true
    } else {
        pottery.cracked = false
    }

    return pottery
}