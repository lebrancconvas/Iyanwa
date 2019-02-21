const Chance = require('chance')
const chance = new Chance()

function roll() {
    return chance.integer({
        min: 1,
        max: 100
    })
}

function pull() {
    var result = roll()
    switch (true) {
        case result >= 1 && result <= 20 :
            return "คุณคือฝ่ายประชาธิปไตย"
            break
        case result >= 21 && result <= 40:
            return "คุณคือฝ่ายอำนาจนิยม"
            break
        default:
            return "คุณคือประชาชนตาดำๆ"
            break
    }
}

module.exports.roll = roll
module.exports.pull = pull