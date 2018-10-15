const barWeight = process.env.bar || 45
const totalWeight = process.env.weight || 255
const plates = [45, 35, 25, 10, 5, 2.5, 1.25, 1, .5]

const platesPerSide = (plates, weight) => {
  if (plates.length === 0) return {}

  const plate = plates[0]
  const result = calcPlates(weight, plates[0])
  const totals = {[plate.toString()]: result.count}

  return Object.assign({},
    platesPerSide(
      plates.slice(1),
      weight - (result.count * plate)
    ), totals
  )
}

const calcPlates = (weight, plate) =>
{
  const count = weight / plate
  const remainder = weight % plate

  return {
    count: Math.floor(count),
    hasRemainder: remainder > 0
  }
}

console.log(`\n\nPlates per side for ${totalWeight}lbs with a bar that weights ${barWeight}lbs:\n`)
const totals = platesPerSide(plates, (totalWeight - barWeight) / 2)
Object.keys(totals).forEach(key => console.log(`${key}: ${totals[key]} plates per side`))
