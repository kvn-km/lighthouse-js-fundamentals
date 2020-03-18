// array of locations to check
const stations = [
    ["Big Bear Donair", 10, "restaurant"],
    ["Bright Lights Elementary", 50, "school"],
    ["Moose Mountain Community Centre", 45, "community centre"]
];

// the function in question
function chooseStations(stations) {
    // initiating the final array
    let goodStations = [];
    // iterate through the arrays or locations
    for (let station of stations) {
        // check for requirements
        if (station[1] >= 20 && (station[2] == "school" || station[2] == "community centre")) {
            // push the matches to our final array
            goodStations.push(station[0]);
        }
    }
    // return the goods
    return goodStations;
}

// show it to us
console.log(chooseStations(stations));

/* 	expected output:
	['Bright Lights Elementary', 'Moose Mountain Community Centre']
*/
