// replace origin with the intended default sound_definitions.json file contnets
var later = origin

// credits, please don't change
later.GENERATED_BY = "UniSound script by CoolAbhi1290"

// retreives all keys
var keys = Object.keys(later.sound_definitions)

// finds the iteration length
var length = keys.length

// looping
var i = 0
while (i !== length) {
	// overrides all .sounds
    later.sound_definitions[keys[i]].sounds = ["sounds/main"]
    i++
}

// writes to document if running in browser environment
if (document) {
	document.write(JSON.stringify(later))
}