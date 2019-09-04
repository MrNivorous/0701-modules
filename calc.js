addArray = (array) => {
	return array.reduce((a,b) => a + b)
}

subtractArray = (array) => {
	return array.reduce((a,b) => a - b)
}

module.exports {
	addArray: addArray,
	subtractArray: subtractArray
}
