// **The Temperature Converter**
// It's hot out! Not. Let's make a converter based on the steps here.


// Create a function called celsiusToFahrenheit:
const calculateCelsiusToFahrenheit= (celTemp) => celTemp * 9 / 5 + 32

// Store a celsius temperature into a variable.
  const celTemp= 25.5;
// Convert it to fahrenheit and output "X°C is Y°F".
console.log(celTemp, '°C', 'is', calculateCelsiusToFahrenheit(celTemp), '°F')
// Create a function called fahrenheitToCelsius:

const calculateFahrenheitToCelsius= (fahTemp) => (fahTemp - 32) / 9 * 5
// Now store a fahrenheit temperature into a variable.
const fahTemp= 95;
// Convert it to celsius and output "X°F is Y°C."
console.log(fahTemp, '°F', 'is', calculateFahrenheitToCelsius(fahTemp), '°C')




// **The Puppy Age Calculator**
// You know how old your dog is in human years, but what about dog years? Calculate it!


// Write a function named calculateDogAge that:
const calculateDogAge= (DogAge) => (DogAge) * 7
// takes 1 argument: your puppy's age.
const DogAge= 5;
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
console.log('Your doggie is', calculateDogAge(DogAge), 'years old in dog years!')
// Call the function three times with different sets of values.

// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
const calculateDogAge2= (DogAge2, HumanAge) => (DogAge2 * HumanAge)
  const DogAge2=7;
  const HumanAge=1;
console.log('Your doggie is', calculateDogAge2(DogAge2, HumanAge), 'years old in dog years!')