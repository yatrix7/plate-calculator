const reverse = function(x, y) {
	return y - x
}

const calculator = function(plates, weight) {
	if (plates.length === 0) return {}

	// always make sure the plates are sorted so we don't add on nine 5's in stead of a single 45
	const sortedPlates = plates.sort(reverse)
	// grab the heaviest plate
	const plateWeight = sortedPlates[0]
	// how many of the heaviest plate can we use
	const count = Math.floor(weight / plateWeight)
	const totals = { [plateWeight.toString()]: count }
	// slice off the plate we just used for *this* calulation
	// as we don't want to calculate against it in the next iteration
	const remaingPlates = sortedPlates.slice(1)
	const remainingWeight = weight - count * plateWeight

	// recurse the remaining weight and plates
	return Object.assign({}, calculator(remaingPlates, remainingWeight), totals)
}

const platesPerSideCalculator = function(plates, weight, barWeight = 45) {
	return calculator(plates, (weight - barWeight) / 2)
}

export default platesPerSideCalculator
