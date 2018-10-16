const barWeight = process.env.bar || 45
const totalWeight = process.env.weight || 255
const plates = [45, 35, 25, 10, 5, 2.5, 1.25, 1, .5]

const platesPerSide = (plates, weight) => {
  if (plates.length === 0) return {}

  const plateWeight = plates[0]
  const count = calcPlates(weight, plateWeight)
  const totals = {[plateWeight.toString()]: count}
  const remaingPlates = plates.slice(1)
  const remainingWeight =   weight - (count * plateWeight)

  return Object.assign({}, platesPerSide(remaingPlates, remainingWeight), totals)
}

const calcPlates = (weight, plateWeight) =>
{
  const count = weight / plateWeight
  const remainder = weight % plateWeight

  return Math.floor(count)
}

console.log(`\n\nPlates per side for ${totalWeight}lbs with a bar that weights ${barWeight}lbs:\n`)
const totals = platesPerSide(plates, (totalWeight - barWeight) / 2)
Object.keys(totals).forEach(key => console.log(`${key}: ${totals[key]} plates per side`))
