// ------------------------------------
// PART 1
// ------------------------------------
// Write a function called toggleLike. It takes no parameters
// toggleLike should find the DOM element with the id 'like1'
// Now, write a conditional statement. It should check to see if the classList
// on the element contains the 'active' class
// If it does, remove the 'active' class. If it doesn't add the 'active' class.

//lab Experiments
const toggleLikeExperiments = () => {
if (document.querySelector('.like').classList.contains('active')) {
    document.querySelectorAll('.like').forEach(function (elem) {
      elem.classList.remove('active')
  })
} else {
    document.querySelectorAll('.like').forEach(function (elem) {
        elem.classList.toggle('active')
        })
    }
}

//extra credit
const toggleLike = (sourceDOMEelement) => {
  const span = sourceDOMEelement
  const tweetDiv = span.parentElement.parentElement
  tweetDiv.classList.toggle('tweet-highlight')
}

//part 1
const toggleLikeGood = () => {
//"conditional statement" == if/else
if (document.getElementById('like1').classList.contains('active')) {
  //remove activeclass
    document.getElementById('like1').classList.remove('active')
} else {//(otherwise)
  //add the active class
//how to add active class:
  document.getElementById('like1').classList.add('active')
    }
}

// ------------------------------------
// PART 2
// ------------------------------------
// Write a function called toggle that takes no parameters
// It should find a DOM element with the id 'like'
// Without writing a conditional statement,
// use the classList to toggle the 'active class'

const toggle = () => {
  document.getElementById('like1').classList.toggle('active')
  //toggle funtion writes it for you
}
