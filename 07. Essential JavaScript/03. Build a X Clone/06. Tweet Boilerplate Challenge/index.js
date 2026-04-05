import { tweetsData } from './data.js'
const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')

tweetBtn.addEventListener('click', function(){
    console.log(tweetInput.value)
})

function getFeedHtml(){
/*
Challenge:
1. Use a "for of" to iterate over the data and 
   create HTML string for each tweet using the 
   boilerplate below. Replace UPPERCASE text
   with data from the tweets. 
2. Store this HTML in a let called "feedHtml".
3. Log out feedHtml.
4. Call getFeedHtml to check it's working.
*/  
}


/*
<div class="tweet">
    <div class="tweet-inner">
        <img src="URL OF PROFILE PIC" class="profile-pic">
        <div>
            <p class="handle">TWEET HANDLE</p>
            <p class="tweet-text">TWEET TEXT</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    NUMBER OF REPLIES
                </span>
                <span class="tweet-detail">
                    NUMBER OF LIKES
                </span>
                <span class="tweet-detail">
                    NUMBER OF RETWEETS
                </span>
            </div>   
        </div>            
    </div>
</div>

*/

