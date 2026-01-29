/*function binary_search(list, item){
    low = 0
    high = list.length //high= 8

    while(low <= high){
        mid = Math.round((low + high)/2)           //2nd loop mid = 4 / 2 = 2
        console.log(mid) //4                        
        guess = list[mid] // list[4 th index] ⬇    //2nd index of list 
        console.log(guess) // 5                    //3

        if(guess == item){ //5!= 2                 // 3!=2
            console.log("reached the goal")        
            return guess
        }
        if(guess > item){ //5> 2                   // 3 > 2
            high = mid - 1 //   4 - 1 = 3          // 2-1 = 1
            console.log("too high", high)
        }else{ 
            low = mid + 1
            console.log("too low", low)
        } 
    }
    return 
}
let mylist = [1,2,3,4,5,8,9,11]

//binary_search(mylist, 11)

function search(listname , numb){
    low = 0
    high = listname.length
    console.log (high)

    for(; low<= high ;){//For binary search, the loop condition itself (low <= high) is your control mechanism.
        mid = Math.round((low + high)/2)
        console.log(mid)
        guess = listname[mid]
        console.log(guess)

        if(guess == numb){
            console.log("got it now", guess )
            return guess
        } 
        if(guess > numb){
            console.log("too high", high )
            high = mid -1
        }else{
            low = mid + 1
            console.log("too low", low )
        }
    } 
    return
}

let namesstart = [1,7,8,9,11,13,16,19]
//search(namesstart, 11 )

//write other one useing for loop and for...of loop

function searchin(list, item){
    low = 0 
    high = list.length
    for(let row of list){
        mid = Math.floor((high + low)/2)
        guess= list[mid]
        //Binary search - Needs to jump to the middle, compare, then skip half the remaining elements. 
        //Requires random access by index.
        //For...of loops are designed for sequential iteration. 
        //Binary search is designed for random access (jumping around). They don't match.
    }
}*/ 

//recursion - understand the conditions to stop.
//A recursive function is a function that waits for itself to finish a smaller job

/*function factorial(value){
    if(value === 1){
        return 1 
    } else{
        let result = value * factorial(value-1)
        console.log(result)
        return result
    }
}

factorial(5)

function fact(value){
    let result = 1
    for(let i = 1 ; value >= i; i++){
        result = result * i
        console.log(result, i)
    }
}

fact(5)

function sum(array){
    total = 0 
    for(let row of array){
        let gone = array.shift()  //shift(): changes the array while iterating ❌
        total = total + gone
        console.log(gone, total, array)
    }
} 
//If you are mutating the same data structure you are
//iterating over, stop and rethink the algorithm.

sum([9,8,7,6,5,4]) 

function sum(array) {
    // base case
    if (array.length === 0) {
        return 0
    }
    // recursive case
    let pain = array[0] + sum(array.slice(1))
    console.log(sum(array.slice(1)))
    console.log(pain)
    return pain
}

sum([9, 8, 7, 6, 5, 4]) // → 39 

//Write a recursive function to count the number of items in a list


function countdown(list){ //⬅ is an array 

    if(list.length === 0 ){
        return  
    }
    //count = "this is", count + countdown(list.length - 1) ⬅ change in state: is a number 
    //Recursion requires the input shape to stay the same every time.
    //console.log(count)

    console.log(list[0])
    countdown(list.slice(1))
}
let mylist = [10,9,8,7,6,5]

countdown(mylist)
//consider strumming DU as a function 
//think of recursion as the string of guitar doing D U motion when
// u go D the string say i have done my job for the melody go to the next string 
// you go to the next the next till you play the whole down stum then the last e string says
// your mission to do a down stum is complete go up. */

//Find the maximum number in a list.
//Remember binary search from chapter 1? It’s a divide-and-conquer
//algorithm, too. Can you come up with the base case and recursive
//case for binary search?
/*var smallest_number = null

function maximum(list){
    if(list.length === 0){
        console.log("i am done")
        return 
    }
    else if(list[0] > smallest_number  ){// 1 > null true // 4 > 1 // 3> 4 F // 
    smallest_number = list[0] //smallest_number = 1      // = 4   // ---     //
    console.log(smallest_number)
    } 
    maximum(list.slice(1)) //slice 1 [4,..]// [3,..]// ---     //
} // 3 remains in array 
maximum([1,4,3,8,2])*/













