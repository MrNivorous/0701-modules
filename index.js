const data = require('./data.js')
const math = require('./calc.js')

let priceArray = data.map(p => p.price)


console.log(math.add(priceArray))

console.log(math.subtract(priceArray))
