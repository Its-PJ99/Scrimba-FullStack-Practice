import { catsData } from '/data.js'

const emotionRadios = document.getElementById('emotion-radios')

emotionRadios.addEventListener('change', highlightCheckedOption)

function highlightCheckedOption(e){
/*
Challenge:
1. highlightCheckedOption should take control 
   of the selected radio input and add the CSS
   class of "highlight" to its classlist.
*/
    console.log(e.target.id)
}
 

function getEmotionsArray(cats){
    const emotionsArray = []    
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            if (!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}


function renderEmotionsRadios(cats){
        
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
            type="radio"
            id="${emotion}"
            value="${emotion}"
            name="emotions"
            >
        </div>`
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)




