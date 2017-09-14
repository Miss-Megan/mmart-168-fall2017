const beyonceTweet = {
    name: 'Beyoncé',
    handle: '@beyonce',
    text: '#LEMONADE the Visual Album.'
}

const links = ['https://twitter.com/mmart168', 'https://twitter.com/beyonce', 'http://www.billboard.com/files/media/beyonce-2016-press-Parkwood-Entertainment-Lemonade-billboard-1548-650-4.jpg']

const modifyText = () => {
  document.querySelector('#message2').innerHTML = beyonceTweet.text
  document.querySelector('#link2').innerHTML = beyonceTweet.name
  document.querySelector('#user2').innerHTML = beyonceTweet.handle
}

const changeLinkAndImageAttributes = () => {
  console.log('changing link attribute')
  document.querySelector('#link1').href = links[0]
  document.querySelector('#link2').href = links[1]
  document.querySelector('#beyonce').src = links[2]

}

const changeClassAttribute = () => {
  console.log('changing class attribute')
  document.querySelector('.tweet').className = 'tweet-pink'
  document.querySelector('#tweet1').className = 'tweet-pink'
  document.querySelector('#tweet2').className = 'tweet-pink'
}

const appendElements = () => {
  console.log('appending element')


document.querySelector('#tweet1').innerHTML += '<a href= https://f17.ebook.mmart.us> Intro to JavaScript</a>'
document.querySelector('#tweet1').innerHTML += '<img src= https://wpcdn.healthyplace.com/blogs/wp-content/uploads/2014/08/Overwhelmed-by-Stress-and-Anxiety-How-to-Deal-with-It.jpg></a>'

}
