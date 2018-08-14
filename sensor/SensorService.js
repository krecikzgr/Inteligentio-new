const fakeDataBase = require('../db/FakeDatabase');


const getSensors = (start, size) => {
    const sensors = fakeDataBase.getSensorsTable();
    const sortedSensors = sensors.sort((a,b)=>a.id<b.id).slice(start,start+size);
    return sortedSensors;
};

// const getTweet = id => {
//     const tweetId = parseInt(id, 10);

//     const tweets = fakeDataBase.getTweetsTable()
//     tweets.find(a.id == tweetId);
//     //TODO return a single tweet by it's tweetId
//     //- Hint: use the array.find-function
//     return null;
// };

// const countTweets = () => {
//     //TODO: return the count of all tweets (TIP: use array.length)
//     return fakeDataBase.getTweetsTable.length;
// };

// const createTweet = tweet => {
//     //TODO
//     tweet.id = fakeDataBase.getTweetsTable().length+1;
//     fakeDataBase.getTweetsTable().push(tweet);
//     //- add the tweet to the database (Hint: use array.push)
//     //- set the id of a tweet BEFORE adding it
//     //- return the created tweet
//     return tweet;
// };


module.exports = {
    getSensors
};