import sut from './platesPerSideCalculator'
import { plates } from '../configuration/config.json'

describe('platesCalculator', () => {
	it('test calculation for 225', () => {
		const results = sut(plates, 225)
		const keys = Object.keys(results)

		// make sure we only two 45's and no other plates
		expect(
			keys.reduce((accum, cur) => {
				if (cur === '45') {
					return accum && results[cur] === 2
				}
				return accum && results[cur] === 0
			}, true)
		).toBeTruthy()
	})

	it('test calculation for 355', () => {
		const results = sut(plates, 355)
		const keys = Object.keys(results)

		// make sure we have three 45's and two 10's
		expect(
			keys.reduce((accum, cur) => {
				if (cur === '45') {
					return accum && results[cur] === 3
				}
				if (cur === '10') {
					return accum && results[cur] === 2
				}
				return accum && results[cur] === 0
			}, true)
		).toBeTruthy()
	})

	it('test calculation for 120', () => {
		const results = sut(plates, 358.5)
		const keys = Object.keys(results)

		// make sure we have three 45's and two 10's
		expect(
			keys.reduce((accum, cur) => {
				if (cur === '45') {
					return accum && results[cur] === 3
				}
				if (cur === '10') {
					return accum && results[cur] === 2
				}
				if (cur === '1.25') {
					return accum && results[cur] === 1
				}
				if (cur === '0.5') {
					return accum && results[cur] === 1
				}
				return accum && results[cur] === 0
			}, true)
		).toBeTruthy()
	})
})
