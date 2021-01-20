// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {

    // Return early if no shift is provided, shift = 0, shift < -25, or shift > 25
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;

    // Empty string variable to add to and return
    let message = "";

    // Alphabet array to compare the input to
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    // Change the input to all lowercase to disregard capital letters
    let inputLower = input.toLowerCase();

    // Loop through the lowercase input
    for (let i = 0; i < inputLower.length; i++) {
      const char = inputLower.charAt(i);

      // Check char to make sure it is a letter
      if ((/[a-z]/).test(char)) {
        // Iterate through the alphabet loop to match the character
        for(let x = 0; x < alphabet.length; x++) {
          const letter = alphabet[x];

          //Match char with letter
          if (char === letter) {
            // Create a shifted index variable to add the encoded/decoded character to message
            let shiftedIndex = 0;

            // Check if we are encoding or decoding
            if (encode) {
              //Add the current index of alphabet to shift into a new variable
              const newIndex = x+shift;

              // If/else statement to see if the shift causes the index to go past the beginning/end of the array
              if(newIndex > 25) {
                shiftedIndex = (newIndex-25)-1;
              } else if(newIndex < 0) {
                shiftedIndex = 25-(Math.abs(newIndex)-1);
              } else {
                shiftedIndex = newIndex;
              };

              // Add the shifted index's value to the message string defined earlier
              message += alphabet[shiftedIndex];
            } 
            
            // Else statement to account for encode = false
            else {
              // Subtract the shift from the current index in the alphabet
              const newIndex = x-shift;

              // If/else statement to see if the shift causes the index to go past the beginning/end of the array
              if (newIndex > 25) {
                shiftedIndex = (newIndex-25)-1;
              } else if(newIndex < 0) {
                shiftedIndex = 25-(Math.abs(newIndex)-1);
              } else {
                shiftedIndex = newIndex;
              };

              //Add the shifted index's value to the message string
              message += alphabet[shiftedIndex];
            };
          };
        };
      } else {
        // Add the non-letter to the message string
        message += char;
      };
    };
    // Return the altered string
    return message
  };

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
