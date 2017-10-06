let language = 'English'
let languageCode = 'en'
let jsonData


const setLanguage = (code) => {
    //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    languageCode = code
    if (code === 'ru') {
        language = 'Russian'
    } else if (code === 'es') {
        language = 'Spanish'
    } else {
        language = 'English'
    }
    document.getElementById('language').innerHTML = language

    //clear form:
    getData()
}

//Homework & online lab//

//copy/pasted from FreeCodeCamp
//easiest way:
//can call "str" anything you want. Doesn't need to be str
const reverseText = (str) => {
  return str.split('').reverse().join('')
}

//To change using a fat arrow, remove "function"  write const reverseText = (str) =>
//old fashioned way "function reverseText(str)"
const reverseText_attempt2 = (str) => {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split('') // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse() // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join('') // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray // "olleh"
}

// => means return
const reverseText_attempt1 = (theText) => {

//1. Split the string (theText) into an array of characters
//2. reverse order of the array
//3. convert sorted array back into a string of characters
let reversedText = ''
for(let i = theText.length -1; i >=0; i--) {
  reversedText += theText[i]
}
 return reversedText
}

const reverseTweet = (tweetText) => {
  //if it has a hashtag return normal tweet
  //if no hashtag text reversed
if (tweetText.indexOf('#') === -1) {
  //This reverses it if no hashtag
  return reverseText(tweetText)
} else {
  return tweetText
  }
}


//end online lab//

const clearData = () => {
    const element = document.getElementById('results')
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

//Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
const getData = () => {

    const term = document.getElementById('term').value
    const baseURL = 'https://mmart168-twitter-proxy.herokuapp.com/1.1/search/tweets.json?q=' + term
    twitterURL = baseURL + '&lang=' + languageCode
    fetch(twitterURL)
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            let div
            let textNode

            // output statuses:
            console.log(json.statuses)

            // clear out existing tweets:
            clearData()

            // ---------------------- TASK 1 -----------------------------------
            // 1. Write a function called 'reverseText' that takes a single string as an input. It should return that string with all characters reversed
            // e.g., 'Hello, world' will return 'dlrow ,olleH'
            // You can test this in the browser by updating the forEach function to reverse every tweet's text
            // HINT: This is a common interview question to screen out javascript devs who don't understand the language's native functions. Google around - you might find a good solution for this problem
            // Once you've written your reverse text function, write a comment describing how it works.

            // ---------------------- TASK 2 -----------------------------------
            // 2. Now, write a function called 'reverseTweet' that takes a single string as an input. If the string contains a hashtag (#), it should return the string.
            // If it doesn't contain a hashtag, it should return the string with all characters reversed
            // Update the forEach function so that it reverses tweets that don't have hashtags
            // HINT: Strings have a useful function called indexOf that you may find useful: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
            // HINT: You already have a reverseText function laying around...

            // ---------------------- DELIVERABLE -----------------------------------
            // When somebody searches for a keyword, tweets with hashtags will appear as normal. Tweets with no hashtags will be inexplicably reversed.
            // EXTRA CREDIT: Add a class to reversed tweets to make their background red. This will require modifying the existing CSS!

            json.statuses.forEach((status) => {
                div = document.createElement('div')
                div.className = 'tweet'
                //for each tweet returned on the server theres a 'div' tag. The class name given is 'tweet'
                textNode = document.createTextNode(reverseText(status.text))
                //then creating text.  Putting the tweet inside the text
                //without reverseText wrapped around the status.text, nothing would work
                div.appendChild(textNode)
                document.getElementById('results').appendChild(div)
            })

        })
}
