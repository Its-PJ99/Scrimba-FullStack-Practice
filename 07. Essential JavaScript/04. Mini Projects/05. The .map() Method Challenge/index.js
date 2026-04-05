import { playlistArr } from '/playlist.js'

/*
Challenge
1. Refactor the code below to use .map() 
   instead of the for loop.
   ⚠️ Don't worry about the commas for now.
*/

const playlistHtml = []

for (let i = 0; i < playlistArr.length; i++) {
    playlistHtml.push(
`<section class="card">
    <div class="card-start">
        <img src="/images/${playlistArr[i].albumArt}">
    </div>
        <div class="card-mid">
            <h4 class="card-title">${playlistArr[i].title}</h4>
            <p class="card-artist">${playlistArr[i].artist}</p>
        </div>
    <div class="card-end">
        <p class="card-menu">...</p>
    </div>
</section>
    `
    )
}

document.getElementById('container').innerHTML = playlistHtml
