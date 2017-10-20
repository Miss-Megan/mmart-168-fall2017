//------------------------------------------------------------------
// PART I
//------------------------------------------------------------------
//Create a function that appends an "li" element to an unordered list
// ("ul" element) in the DOM. This function should take a string as a
// parameter. In the body of the function, there should be code that
// appends an "li" element, with the string inside, to the un-ordered
// list ("ul" tag):

const addListItemtoUnorderedHTMLList = (message) => {
//ad "li tag to ul tag"
//document.getElementById('output').innerHTML += '<li>' + message + '</li>'

//step 1: get element in HTML file:
const ul = document.getElementById('output')

//Step 2: create a brand new li element:
const li = document.createElement('li')

//Step 3: create TExtNode with the message inside
const textNode = document.createTextNode(message)

//Step 4: append textNode to li element
li.appendChild(textNode)

//step 5: append the li element to the ul element
ul.appendChild(li)
}


//addListItemtoUnorderedHTMLList('Steve')
//addListItemtoUnorderedHTMLList('Alex')
//addListItemtoUnorderedHTMLList('Karin')

//alternative method

//------------------------------------------------------------------
// PART II
//------------------------------------------------------------------
// Using the strategy of your choice, write a loop over the numbers
// 1 - 100 that satisfies the following conditions:
//
// 1. If the number is divisible by 3, append "Fizz" to the unordered list
// 2. If the number is divisible by 5, append "Buzz" to the unordered list
// 3. If the number is divisible by 3 AND 5, append "FizzBuzz" to the unordered list.
// 4. Bonus points: Include both the number *and* the word you've appended to the list


//let i = 0; <-- it executes this 1 time before the loop begins
//i is less than 100;  <-- it checks this condition every time the function loops.
//                         if the condition is true it keeps looping, otherwise it ends
// i ++                <-- executes everytime the loop runs
for (let i = 1; i <= 100; i++) {
  //console.log(i)
  if (i % 3 === 0 && i % 5 === 0) {
    addListItemtoUnorderedHTMLList('FizzBuzz')
  }  else if (i % 3 === 0) {
    addListItemtoUnorderedHTMLList('Fizz')
  } else if (i % 5 === 0) {
    addListItemtoUnorderedHTMLList('Buzz')
  } else {
    addListItemtoUnorderedHTMLList(i)
  }
}

//to add each number to the list, what funtion should i call instead?
