import React from "react";
import memesData from "../memesData"

export default function MemeForm() {

    let imgUrl
    function handleSubmit(e) {
        e.preventDefault()
        const dataArray = memesData.data.memes;
        const randomMemeNumber = Math.floor( Math.random() * dataArray.length);
        imgUrl = dataArray[randomMemeNumber].url
        // console.log(imgUrl)
        memeImageState(imgUrl)
    }

    const [memeImage, memeImageState] = React.useState('')


        /**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="top-text" hidden>Top Text</label>
                <input type="text" id="top-text" name="top-text" placeholder="Top Text"/>
                <label htmlFor="bottom-text" hidden>Bottom Text</label>
                <input type="text" id="bottom-text" name="bottom-text" placeholder="Bottom Text"/>
                <button>Get a New meme Image 🖼️</button>
            </form>
            <img src={memeImage} alt="meme image" className="meme-image" />
        </>
    )
}