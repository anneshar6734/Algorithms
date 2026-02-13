/*function quicksort(array){
    console.log("hi")
    if(array.length < 2){
        return array + "hi"
    }
    let pivot = array[0]// 3 
    console.log(pivot)
    let less = []
    for(let row of array) {
        if(row < pivot) {
            less.push(row)
            console.log(less)
        }
    }

    let more = []
    for(let i = 1; i < array.length; i++) {
        if(array[i] > pivot) {
            more.push(array[i])
        }
    }
    console.log(...less, pivot,... more)
}

quicksort([3,1,4,5,2]) 

function quicksortarr(array1){
    if(array1.length < 2){
        console.log("done")
        return
    }
    let pivot1 = array1[0]
    console.log(pivot1)
    let less = array1.slice(1).filter(numb => numb < pivot1)
    // the sliced array is given to the filter
    console.log(less)
    let big = array1.slice(1).filter(numb => numb > pivot1)
    console.log(big)

}

quicksortarr([8,1,4,6,2,7,5,9,3])

function quicksortarr2(array2){
    
    if(array2.length > 2 ){
        let midOfarray = Math.floor(array2.length/2)
        console.log(midOfarray) //5

        let pivot1 = array2[midOfarray] // piviot is 5 

        let less = array2.slice().filter(numb => numb < pivot1)
        console.log(less)                                       // = [ 1, 4, 3, 2 ]

        let big = array2.slice().filter(numb => numb > pivot1)
        console.log(big)
        
        console.log(...less, pivot1, ...big)
        
    }
}

quicksortarr2([8,1,4,6,10,5,7,9,3,2])*/

/*let fruit = {
    "apple": 0.67,
    "milk": 1.49,
    "avocado": 1.49
}

console.log(fruit["apple"])

//For Arrays: [] means "get element at index" 
//For Objects: [] means "get property with this name"

let book = {apple: 0.67, milk: 1.49}
let itemName = "milk"

console.log(book.itemName)    // What happens? ❌
console.log(book[itemName])   // What happens? ✅*/

/*let book = {apple: 0.67, milk: 1.49}

console.log(book.apple)     // Works: 0.67
//book.milk         // Works: 1.49
//book.red apple    // ❌ Syntax Error! Can't have space!
//book.2-liter      // ❌ Syntax Error! Can't start with number!

book = {
    "red apple": 0.89,      // Property with SPACE!
    "2-liter milk": 2.99,   // Property starting with NUMBER!
    "normal apple": 0.67
}

book["red apple"]      // Works: 0.89
book["2-liter milk"]   // Works: 2.99


//let itemName = "gala apple"

// Dot notation FAILS:
//applePrices.itemName // ❌ Looks for property literally named "itemName"

//Bracket notation WORKS:
//applePrices[itemName] // ✅ Uses variable value "gala apple" → 0.75 

function hashFruit(name) {
    let total = 0 
    
    for(let word of name){
        total = total+ word.charCodeAt(0)
    }
    
//charCodeAt() method of String values returns an integer between 0 and 65535 
    //representing the UTF-16 code unit at the given index.

    return total % 10 // shelfs (% aka remainder !not percentage!)
}

// Test:
console.log(hashFruit("apple"))   // Should always give same number
console.log(hashFruit("banana"))  // Different number (usually)
console.log(hashFruit("apple"))   // Same as first call!


console.log(hashFruit("ap"))      // a=97, p=112 → 209%10=?
console.log(hashFruit("pa"))      // p=112, a=97 → 209%10=?
//"ap" and "pa" give same hash! This is a collision - different inputs, same output!
*/


// See the conversion both ways
let letter = "m"
let code = letter.charCodeAt(0)
console.log(`${letter} → ${code} → ${String.fromCodePoint(code)}`)

function hashFruit(name) {
    let total = 0
    
    for(let i = 0; i < name.length; i++) {
        let letter = name[i]
        let code = letter.charCodeAt(0)
        let position = i + 1  // i starts at 0, but 1st position = 1
        
        total = total + (code * position)  // Multiply code by position!
    }
    
    return total % 10
}















