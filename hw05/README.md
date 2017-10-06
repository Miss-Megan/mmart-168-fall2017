


## PART II: Reading response


'Ten Things A Serious JavaScript Developer Should Learn'
from benmccormick.org

Love that Reddit is mentioned, b/c I have found Reddit as the most raw responses of and often insightful) anything on the web. This article assumed "the audience is a developer who has some level of professional experience." Unlike the podcasts I've listened to, , I did not feel encouraged after reading this article. There were tasks/languages and concepts I am familiar with, however the article mentioned way more things I am not familiar with... such as:

Prettier
Typescript
React
React Native
Cordova
Electron
Basics of networking... and many others.

It was nice to read "JavaScript is not a complicated language" opposed to Python, for example. But it feels very complicated at this point in time.









## Part III: JavaScript Homework

### Step 1: Reverse a tweet
> Open the following 2 files in Atom:
>  
>  * hw05/part1.html
>  * hw05/scripts/part1.js

Complete the following 2 tasks:

1. Write a function called "reverseText" that takes a single string as an input. It should return that string with all characters reversed (`e.g., "Hello, world" will return "dlrow ,olleH"`).You can test this in the browser by updating the forEach function to reverse every tweet's text
> HINT: This is a common interview question to screen out javascript devs who don't understand the language's native functions. Google around - you might find a good solution for this problem.

Once you've written your reverse text function, write a comment describing how it works.

2. Now, write a function called "reverseTweet" that takes a single string as an input. If the string contains a hashtag (#), it should return the string. If it doesn't contain a hashtag, it should return the string with all characters reversed. Update the forEach function so that it reverses tweets that don't have hashtags
> HINT: Strings have a useful function called [indexOf]((https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)) that you may find useful
> HINT: You already have a reverseText function laying around...

### Step 2: Filtering Data
> Open the following 2 files in Atom:
>  
>  * hw05/part2.html
>  * hw05/scripts/part2.js

Complete the following task:

1. Create a new variable called tweetsWithHashtags
2. Call the "filter" function on the json.statuses array. The filter function returns an array, so you can assign the resulting array to the `tweetsWithHashtags` variable. Read more about filter here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
3. Write an anonymous function that checks each tweet's text, and filters out tweets that do NOT have hashtags.
4. Update the forEach function so that it runs on the new tweetsWithHashtags array

### Step 3: Submit Your Homework via GitHub + Moodle
This week, you're going to submit your homework using GitHub. To do so:

1. Just as in Step three, open your Terminal and type: `$ git status`. It should tell you which file you've changed.
2. To "commit" all of your changes, type: ` $ git commit -am 'Homework 5 updates'`
3. To "push" your change to up to your github account, type: `$ git push`
4. Finally, verify that your changes are up on GitHub by logging into your GitHub account and taking a look.
5. **Submit your homework by pasting a link to your branch into the Moodle.**
