import fetch from 'node-fetch'

// tradisional
// fetch('https://fake-tweets-api.herokuapp.com/posts')
//     .then(response => {
//         return response.json()
//     }).then(tweets => tweets.filter(tweet => {
//         return tweet.stars > 50
//     })).then(tweets => {
//         tweets.filter(tweet => {
//             return tweet.rts > 50
//         })
//     }).catch(err => {
//         console.log(err)
//     })

// //implicit arrow function
// fetch('https://fake-tweets-api.herokuapp.com/posts')
//     .then(response => response.json())
//     .then(tweets => tweets.filter(tweet => tweet.stars > 50))
//     .then(tweets => tweets.filter(tweet => tweet.rts > 50))
//     .catch(err => console.log(err))

fetch('https://fake-tweets-api.herokuapp.com/posts')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        console.log(data.length)
    })
    .catch(err => console.log(err))

// new promise
setTimeout(() => {
    console.log("Tick")
}, 1000)

//
const doSomething = function () {
    return new Promise((resolve, reject) => {
        // do something asynchronously here
    })
}

// call something and receive a Promise as return
let doIt = doSomething()

// wait for promise to get resolved
doIt.then(response => {
    // use response
})

// or get rejected
doIt.catch(error => {
    // deal with the error
})

const setTimeoutPromise = (duration) =>
    new Promise((resolve, reject) => {
        setTimeout(resolve, duration)
    })

setTimeoutPromise(1000).then(() =>
    console.log("tick"))

// async/await
const fetchTweets = async () => {
    const response = await fetch('https://fake-tweets-api.herokuapp.com/posts')
    const tweets = await response.json()
    // let tweetss = tweets.filter(tweet => tweet.stars > 50)
    // tweetss = tweets.filter(tweet => tweet.rts > 50)
    console.log(tweets)
}

// fetchTweets()

// async/await with IIFE (Immediately Invoked Function Expression)
(async () => {
    const response = await fetch('https://fake-tweets-api.herokuapp.com/posts')
    const tweets = await response.json()
    // let tweetss = tweets.filter(tweet => tweet.stars > 50)
    // tweetss = tweets.filter(tweet => tweet.rts > 50)
    console.log(tweets)
})()