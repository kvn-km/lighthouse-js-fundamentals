for (let i = 100; i < 201; i++) {
	if (i % 3 === 0 && i % 4 != 0) {
		//is it multiple of 3?
		console.log("Loopy"); //print LOOPY
	} else if (i % 4 === 0 && i % 3 != 0) {
		//is it multiple of 4?
		console.log("Lighthouse"); //print LIGHTHOUSE
	} else if (i % 3 === 0 && i % 4 === 0) {
		//is it multiple of both?
		console.log("LoopyLighthouse"); //print LOOPYLIGHTHOUSE
	} else {
		console.log(i); //otherwise just print the normal number
	}
}
