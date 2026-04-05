fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=;hjksdf;kljsdfgl;kdsjfgljksdfglkjhsdfg")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        /**
         * Challenge: get a URL for a default background image and set it here
         * 
         * 1. Change the query in the URL above back to something real
         * 2. Log the image url to the console (replacing console.log(data) above)
         * 3. Use that URL as the "default" background image to be used if 
         *    the promise is ever rejected.
         */
    })

