function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min + 1;
}
module.exports = random;