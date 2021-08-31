
// *Any* Type
// json may come from a third-party API
const json = `{"latitude": 10.11, "longitude":12.12}`;

// parse JSON to find location
const currentLocation = JSON.parse(json);
console.log(currentLocation);

let result: any;
result = 10.123; // Float
console.log(result.toFixed()); // toFixed() => toInt() :)
