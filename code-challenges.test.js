// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

// Pseudo Code:
  // Input: String
  // Output: String
  // Process:
    // Function Name: codedMSG
    // Assign parameter name 'string' to the function
    // Convert string to an array
    // Iterate through the array (possible tool: .map())
    // Compare each character to code base provided (possible tool: conditionals)
    // Replace respective characters with given character (possible tool: .replace())
    // Convert array back to string
    // Return completed string
  // Expected Output: "L4ck4d41s1c4l"
                   // "G0bbl3dyg00k"
                   // "3cc3ntr1c"

describe("codedMSG", () => {

    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"

    it("takes in a string and returns a string with a coded message.", () => {
        expect(codedMSG(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codedMSG(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codedMSG(secretCodeWord3)).toEqual("3cc3ntr1c")
    })

})

// Good failure due to codedMSG() not defined
// FAIL  ./challenges.test.js
// codedMSG
//   ✕ takes in a string and returns a string with a coded message. (1 ms)

// ● codedMSG › takes in a string and returns a string with a coded message.

//   ReferenceError: codedMSG is not defined


// b) Create the function that makes the test pass.

// const codedMSG = (string) => {

//     // Converts string into an array
//     // uses .map() to iterate through that array
//     return string.split("").map(value => {

//         // converts value to lower case and compares it to the code requirement
//          if (value.toLowerCase() === "a"){
//             // Replaces value with the corresponding code number
//             return value = "4"
//          }
//          else if (value.toLowerCase() === "e") {
//             return value = "3"
//          }
//          else if (value.toLowerCase() === "i") {
//             return value = "1"
//          }
//          else if (value.toLowerCase() === "o") {
//             return value = "0"
//          }
//          else {
//             return value
//          }        
//      }).join("") // Converts the array back in to a string before returning
  
//  }
//  Success
// PASS  ./challenges.test.js
// codedMSG
//   ✓ takes in a string and returns a string with a coded message. (1 ms)

// Refactor 1
// Pseudo Code:
  // Process:
    // Create temporary string variable and assign it ""
    // Create object with keys of the characters to be replaced and their values what they are replaced with
    // Iterate through the string (possible tool: for loop)
    // Compare the current character to the keys in the 'codeRepl' object (possible tool: ternary operator)
    // Add code replacement or original character to 'tempStr'
    // Return 'tempStr
  // Expected Output: "L4ck4d41s1c4l"
                   // "G0bbl3dyg00k"
                   // "3cc3ntr1c"


// const codedMSG = (string) => {

//     let tempStr = ""
//     let codeRepl = {"a": 4, "e": 3, "i": 1, "o": 0}
 
//     // Iterates through the string
//     for (let i = 0; i < string.length; i++) {
 
//         // Compares current string character to 'codeRepl' keys
//         // Adds coded replacement to 'tempStr' if keys match
//         // Adds original character to 'tempStr' if no matches
//         (Object.keys(codeRepl)).includes(string[i].toLowerCase()) ? tempStr += codeRepl[string[i].toLowerCase()] : tempStr += string[i]

//      }
 
//      return tempStr
   
//  }

//  Success
// PASS  ./code-challenges.test.js
// codedMSG
//   ✓ takes in a string and returns a string with a coded message. (2 ms)

// Refactor 2
// Pseudo Code:
  // Process:
    // Remove 'tempStr'
    // Convert 'string' to an array (possible tool: .split())
    // Replace for loop with .map
    // Return completed coded string (possible tool: .join())
  // Expected Output: "L4ck4d41s1c4l"
                   // "G0bbl3dyg00k"
                   // "3cc3ntr1c"

const codedMSG = (string) => {

    let codeRepl = {"a": 4, "e": 3, "i": 1, "o": 0}

    // Converts 'string' to an array
    // Iterates through the array
    return string.split("").map(value => {

        // Compares each 'value' to keys in 'codeRepl' and returns the associated value if included
        // Returns 'value' if not
        return (Object.keys(codeRepl).includes(value.toLowerCase())) ? codeRepl[value.toLowerCase()] : value

    // Converts array back to a string 
    }).join("")

}

// Success
// PASS  ./code-challenges.test.js
// codedMSG
//   ✓ takes in a string and returns a string with a coded message. (2 ms)


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

// Pseudo Code:
  // Input: String and Array
  // Output: Array
  // Process:
    // Function Name: wordContains 
    // Assign the parameter name "string" and "array" to the function
    // Iterate through the array (possible tool: .filter())
    // Check to see if the element has the letter in it (possible tool: .includes())
    // Return resulting array
  // Expected Output: ["Mango", "Apricot", "Peach"]
                   // ["Cherry", "Blueberry", "Peach"]

describe("wordContains", () => {
    
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

    const filterLetterA = "a"
    // Expected output: ["Mango", "Apricot", "Peach"]
    const filterLetterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
        expect(wordContains(filterLetterA, fruitArray)).toEqual(["Mango", "Apricot", "Peach"])
        expect(wordContains(filterLetterE, fruitArray)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})



// Good failure due to wordContains() not defined
// FAIL  ./challenges.test.js
// codedMSG
//   ✓ takes in a string and returns a string with a coded message. (1 ms)
// wordContains
//   ✕ takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// ● wordContains › takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

//   ReferenceError: wordContains is not defined

// b) Create the function that makes the test pass.

const wordContains = (string, array) => {

    // .filter() iterates through the array and checks for a condition
    // .toLowerCase ensures all characters in the value are lowercase
    // .includes() is the condition filter is checking for
    return array.filter(value => value.toLowerCase().includes(string))
    
}

// Success
// PASS  ./challenges.test.js
// codedMSG
//   ✓ takes in a string and returns a string with a coded message. (1 ms)
// wordContains
//   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// No refactor necessary




// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// Pseudo Code:
  // Input: Array
  // Output: Boolean
  // Process:
    // Function Name: fullHouse 
    // Assign parameter name 'array' to the function
    //  Create four temporary variables as follows:
        // firEle = first element in array
        // secEle = 0
        // count1 = 0
        // count2 = 0
    // Iterate through the array and count number of 'firEle' repetitions in the array and assign a value that doesn't match to 'secEle' (possible tool: .filter())
    // Iterate through the array a second time, counting the number of 'secEle' matches (possible tool: .filter())
    // Check to see if either 'count1' or 'count2' equal either 2 or 3 and return true, otherwise return false (possible tool: conditionals)
  // Expected Output: true
                   // false
                   // false
                   // true


describe("fullHouse" , () => {
  
  const hand1 = [5, 5, 5, 3, 3]
  // Expected output: true
  const hand2 = [5, 5, 3, 3, 4]
  // Expected output: false
  const hand3 = [5, 5, 5, 5, 4]
  // Expected output: false
  const hand4 = [7, 2, 7, 2, 7]
  // Expected output: true

  it("takes in an array of 5 numbers and determines whether or not the array is a 'full house'.", () => {
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
    expect(fullHouse(hand4)).toEqual(true)
  })

})

// Good failure due to fullHouse() not defined
// FAIL  ./challenges.test.js
// codedMSG
//   ✓ takes in a string and returns a string with a coded message. (1 ms)
// wordContains
//   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter.
// fullHouse
//   ✕ takes in an array of 5 numbers and determines whether or not the array is a 'full house'. (1 ms)

// ● fullHouse › takes in an array of 5 numbers and determines whether or not the array is a 'full house'.

//   ReferenceError: fullHouse is not defined


// b) Create the function that makes the test pass.

// const fullHouse = (array) => {

//   let firEle = array[0]
//   let secEle = 0
//   let count1 = 0
//   let count2 = 0

//   // .filter() determines if value equals firEle
//   array.filter(value => {
//     // Increments count1 if true
//     // Assigns value to secEle
//     return value === firEle ? count1++ : secEle = value
//   })

//   // .filter() determines if value equals secEle
//   array.filter(value => {
//     // Increments count2 if true
//     return value === secEle ? count2++ : null
//   })

//   // Checks to see if the counts match the required numbers for a full house
//   if(count1 === 3 && count2 === 2){
//     return true
//   }
//   else if(count1 === 2 && count2 == 3) {
//     return true
//   }
//   else {
//     return false
//   }

// }

// Success
// PASS  ./challenges.test.js
// codedMSG
//   ✓ takes in a string and returns a string with a coded message. (2 ms)
// wordContains
//   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter. (1 ms)
// fullHouse
//   ✓ takes in an array of 5 numbers and determines whether or not the array is a 'full house'.

// Refactor 1
// Pseudo Code:
  // Process:
    // Removed temporary variables
    // Create temporary object 'repititions'
    // Iterate through the array (possible tool: .map())
    // Check to see if the current value already exists in 'repititions' (possible tool: conditionals)
        // If yes, increment the value of the key
        // If no, add 'value' as a key and set the key value to 1
    // Check to see if any value in 'repititions' is equal to 3 (possible tool: conditionals)
        // If yes, return true
        // If no, return false
  // Expected Output: true
                   // false
                   // false
                   // true


// const fullHouse = (array) => {

//     // Temporary object
//     let repititions = {}

//     // Iterates through the given array
//     array.map(value => {

//         // Checks to see if current value exists in 'repititions' object
//         if(repititions[value]) {

//             // Increment the value associated with that key
//             repititions[value]++
//         }
//         else {

//             // Add the current value as a key in 'repititions' object
//             // Set the key value to 1
//             repititions[value] = 1
//         }
//     })

//     // Check if any value in 'repititions' object is equal to 3
//     if (Object.values(repititions).includes(3)) {
//         return true
//     }
//     else {
//         return false
//     }

// }

// Success
// PASS  ./code-challenges.test.js
// codedMSG
//   ✓ takes in a string and returns a string with a coded message. (1 ms)
// wordContains
//   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter. (1 ms)
// fullHouse
//   ✓ takes in an array of 5 numbers and determines whether or not the array is a 'full house'.

// Refactor 2
// Pseudo Code:
  // Process:
    // Replace conditional statements with ternary operators
  // Expected Output: true
                   // false
                   // false
                   // true

const fullHouse = (array) => {

    // Temporary object
    let repititions = {}

    // Iterates through the give array
    array.map(value => {

        // Checks to see if current value exists in 'repititions' object
        // If yes, increment the value associated with that key
        // If no, add the current value as a key in 'repititions' object
            // Set the key value to 1
        repititions[value] ? repititions[value]++ : repititions[value] = 1

    })

    // Check if any value in 'repititions' object is equal to 3
    return Object.values(repititions).includes(3) ? true : false

}

// Success
// PASS  ./code-challenges.test.js
// codedMSG
//   ✓ takes in a string and returns a string with a coded message. (1 ms)
// wordContains
//   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter.
// fullHouse
//   ✓ takes in an array of 5 numbers and determines whether or not the array is a 'full house'. (1 ms)