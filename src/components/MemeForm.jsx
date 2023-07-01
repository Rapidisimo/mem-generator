import React from "react";
import memesData from "../memesData"

export default function MemeForm() {

        /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */

    
    
    function handleSubmit(e) {
        e.preventDefault()
        const dataArray = allMemeImages.data.memes;
        const randomMemeNumber = Math.floor( Math.random() * dataArray.length);
        memeImageState(prevDate => {
            return {
                ...prevDate, randomImage: allMemeImages.data.memes[randomMemeNumber].url
            }
        })
    }

    const [memeImage, memeImageState] = React.useState({
        toptext: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemeImages, allMemeImagesState] = React.useState(memesData)

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="top-text" hidden>Top Text</label>
                <input type="text" id="top-text" name="top-text" placeholder="Top Text"/>
                <label htmlFor="bottom-text" hidden>Bottom Text</label>
                <input type="text" id="bottom-text" name="bottom-text" placeholder="Bottom Text"/>
                <button>Get a New meme Image 🖼️</button>
            </form>
            <img src={memeImage.randomImage} alt="meme image" className="meme-image" />
        </>
    )
}