class Driver {
	constructor(name, day) {
		this.name = name
		this.startDate = new Date(day)
	}
	
	yearsExperienceFromBeginningOf(year) {
		return year - this.startDate.getFullYear() -1
	}
	
}

class Route {

	constructor(beginningLocation, endingLocation) {
		this.beginningLocation = beginningLocation
		this.endingLocation = endingLocation
	}

	blocksTravelled() {
		let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
		let vert = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
		let horiz = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
		return vert + horiz
	}

	estimatedTime(isPeak) {
		if (isPeak) {
			return this.blocksTravelled() / 2
		} else {
			return this.blocksTravelled() / 3
		}
	}
}
