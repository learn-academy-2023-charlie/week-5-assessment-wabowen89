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

const codedMSG = (string) => {

    // Converts string into an array
    // uses .map() to iterate through that array
    return string.split("").map(value => {

        // converts value to lower case and compares it to the code requirement
         if (value.toLowerCase() === "a"){
            // Replaces value with the corresponding code number
            return value = "4"
         }
         else if (value.toLowerCase() === "e") {
            return value = "3"
         }
         else if (value.toLowerCase() === "i") {
            return value = "1"
         }
         else if (value.toLowerCase() === "o") {
            return value = "0"
         }
         else {
            return value
         }        
     }).join("") // Converts the array back in to a string before returning
  
 }
//  Success
// PASS  ./challenges.test.js
// codedMSG
//   ✓ takes in a string and returns a string with a coded message. (1 ms)



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

const fullHouse = (array) => {

  let firEle = array[0]
  let secEle = 0
  let count1 = 0
  let count2 = 0

  // .filter() determines if value equals firEle
  array.filter(value => {
    // Increments count1 if true
    // Assigns value to secEle
    return value === firEle ? count1++ : secEle = value
  })

  // .filter() determines if value equals secEle
  array.filter(value => {
    // Increments count2 if true
    return value === secEle ? count2++ : null
  })

  // Checks to see if the counts match the required numbers for a full house
  if(count1 === 3 && count2 === 2){
    return true
  }
  else if(count1 === 2 && count2 == 3) {
    return true
  }
  else {
    return false
  }

}

// Success
// PASS  ./challenges.test.js
// codedMSG
//   ✓ takes in a string and returns a string with a coded message. (2 ms)
// wordContains
//   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter. (1 ms)
// fullHouse
//   ✓ takes in an array of 5 numbers and determines whether or not the array is a 'full house'.
