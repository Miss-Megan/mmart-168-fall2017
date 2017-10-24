//------------------------------------------------------------------
// PART I: Using a while loop, print the message provided 100 times
//------------------------------------------------------------------

const name = 'John'

// Creates a list element and appends it to the unordered list in part1
// note: Ricky created this function as a way to add list items to the DOM
const appendListElement = (text) => {
//creates an empty list item container
  const li = document.createElement('li')

//creates a textnode in the document that contains the string stored in the
//"text" parameter. Same as the message that was passed into the function
  const textNode = document.createTextNode(text)
  li.appendChild(textNode)
  document.querySelector('#part1').appendChild(li)
}

let counter = 1
while (counter <= 100) {
appendListElement(counter + '. One week until Halloween!')
++counter
}
appendListElement('Welcome, ' + name + '! Make yourself comfortable.')
appendListElement('Hello, ' + name + '! Make yourself comfortable.')

//------------------------------------------------------------------
// PART II: Using a for loop, write out each person’s avatar, name, and score, based on the people array
//------------------------------------------------------------------
//The data:
var people = [
  {
    name: 'Jasper',
    pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png',
    score: 600
  },
     {
       name: 'Jane',
       pic: 'http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png',
       score: 300
     },
     {
       name: 'Maria',
       pic: 'http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png',
       score: 80
     },
     {
       name: 'Wanda',
       pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png',
       score: 60
     },
     {
       name: 'Malik',
       pic: 'http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png',
       score: 40
     },
     {
       name: 'Brenda',
       pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png',
       score: 10
     } ,
]


// use a for loop to DRY up the printNames function
// it should loop over the people array and append
// the users avatar pic, a greeting, and their score to the HTML
const printNames = (counter) => {
  // Message 1
  const img1 = document.createElement('img')
  img1.src = people[counter].pic
  img1.classList.add('avatar')

  const paragraph1 = document.createElement('p')
  const text1 = document.createTextNode('Welcome, ' + people[counter].name + '! Your score is: ' + people[counter].score)
  paragraph1.appendChild(text1)

  document.querySelector('#part2').appendChild(img1)
  document.querySelector('#part2').appendChild(paragraph1)

}
//Arrays & Loops = best friends
for (let i = 0; i < people.length; i++) {
printNames(i)
}
