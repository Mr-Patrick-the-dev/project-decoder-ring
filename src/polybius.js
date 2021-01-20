// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    
    // Return early if encode = false (decoding) and input's length w/o spaces is an odd number
    if(encode === false && (input.split(" ").join("").length) % 2 != 0 ) return false;

    // Define an object that will hold the Polybius Square reference
    const square = {"a": "11", "b": "21", "c": "31", "d": "41", "e": "51", "f": "12", "g": "22", "h": "32", "(i/j)": "42", "k": "52", "l": "13", "m": "23", "n": "33", "o": "43", "p": "53", "q": "14", "r": "24", "s": "34", "t": "44", "u": "54", "v": "15", "w": "25", "x": "35", "y": "45", "z": "55"};

    // Declare an empty string to add to and return later
    let message = "";

    // Check to see if we are encoding
    if (encode === true) {
      // Change the input to adjust for capital letters
      const inputLowered = input.toLowerCase();
      
      // Loop throuogh the lowercase input
      for (let i = 0; i < inputLowered.length; i++) {
        const char = inputLowered.charAt(i);

        // Test that the character is a letter
        if ((/[a-z]/).test(char)) {

          // Check if the character is i or j, if so add "42" to the message
          if (char === "i" || char === "j") {
            message += "42";
          } else {
            // Character is a letter but not "i" or "j"
            
            // Iterate through the polybius square 
            for(let letter in square) {
              const numb = square[letter];

              // Match the character with the correct letter key
              if (letter === char) {

                //Add that letter's number
                message += numb;
              };
            }
          };
        } else {
          // Character is not a letter, add it to the message to account for spaces
          message += char;
        };
      };
    } else {
      // This means encode = false

      //  Split the input to remove any potential spaces
      const noSpaceInput = input.split(" ");

      // Iterate through each element in the split input array
      for (let i = 0; i < noSpaceInput.length; i++) {
        const word = noSpaceInput[i];

        // Iterate through the characters at the element in the split input array
        // iterate through 2 characters at a time
        for (let x = 0; x < word.length; x+=2) {
          const current = word[x];
          const next = word[x+1];

          // Combine the pair to find the value to matched with a letter key
          const encodedChar = current + next

          // Iterate through the polybius square
          for (let letter in square) {
            const numb = square[letter];

            // Match the encoded character # with the correct number value in the polybius square
            if (encodedChar === numb) {

              // Add the key to the message string
              message += letter;
            };
          };
        };
        // Add a blank space to message after each separate word in the split input array is iterated through
        message += " "
      };
    };
    // Return the altered message, using trim to remove any excess empty spaces
    return message.trim();
  };
    return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
