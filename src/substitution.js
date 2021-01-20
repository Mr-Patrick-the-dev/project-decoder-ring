// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    
    // Return early if the # of unique characters in the sub alphabet is not exactly 26
    if (new Set(alphabet).size != 26) return false;

    // Set up an array for the real alphabet
    const realAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Alter the input to be lower case to account for capital letters
    const inputLowered = input.toLowerCase();

    // Alter the alternate alphabet string to be an object
    const altAlph = {...alphabet.split("")};

    // Set up an empty string to add to an return later
    let message = "";

    // Reduce the real alphabet array to be an object
    // Utilize the index number of each letter to match the key in altAlph
    const alphTranslate = realAlph.reduce((acc, letter, index) => {

      // Iterate through altAlph
      for (let charIndex in altAlph) {
        const altChar = altAlph[charIndex];

        // Match the string version of the real letter's current index with the charIndex of the alternate Alphabet object
        if (index.toString() === charIndex) {

          // In the accumulator object, make the real letter the key with the value of the alternate character
          acc[letter] = altChar;
        };
      };
      
      return acc;
    }, {});   

  // Iterate through the lowercased input string
  for (let i = 0; i < inputLowered.length; i++) {
    const inputChar = inputLowered.charAt(i);

    // Check the current character and see if it is a blank space
    if ((/\s/g).test(inputChar)) {
      
      // Add the blank space to the message
      message += inputChar;
    } else { // The character was not a blank space

      // Iterate throug the translated alphabet object
      for (letter in alphTranslate) {
        const altLetter = alphTranslate[letter];
        
        // Check to see if you're encoding
        if (encode) {

          // Match the current input character with the right letter key
            // Add the alternate letter value to the message
          if (inputChar === letter) message += altLetter;

        } else {  // Decoding

          // Match the current input character with the right alternate letter value
            // Add the real letter key to the message
          if (inputChar === altLetter) message += letter;
  
        };
      };
    };
  };

  // Return the encoded/decoded message
  return message;
  };

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
