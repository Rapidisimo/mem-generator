import React from "react";
import memesData from "../memesData"

export default function MemeForm() {

    /**
     * Challenge: 
     * ✅ 1. Set up the text inputs to save to
     *    the `topText` and `bottomText` state variables.
     * 2. Replace the hard-coded text on the image with
     *    the text being saved to state.
     */

    
    function handleSubmit(e) {
        e.preventDefault()
        const dataArray = allMemeImages.data.memes;
        const randomMemeNumber = Math.floor( Math.random() * dataArray.length);
        setMemeImage(prevDate => {
            return {
                ...prevDate, randomImage: allMemeImages.data.memes[randomMemeNumber].url
            }
        })
    }

    const [memeImage, setMemeImage] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemeImages, allMemeImagesState] = React.useState(memesData)

    function handleChange(e) {
        console.log(memeImage)
        const {name, value} = e.target
        setMemeImage(prevData => {
            return {...prevData, [name]: value}
        })
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="top-text" hidden>Top Text</label>
                <input 
                    type="text" 
                    id="top-text" 
                    placeholder="Top Text"
                    name="topText"
                    value={memeImage.topText}
                    onChange={handleChange}
                />
                <label htmlFor="bottom-text" hidden>Bottom Text</label>
                <input 
                    type="text" 
                    id="bottom-text" 
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={memeImage.bottomText}
                    onChange={handleChange}
                />
                <button>Get a New meme Image 🖼️</button>
            </form>
            <div className="generated-meme">
                <img src={memeImage.randomImage} alt="meme image" className="meme-image" />
                <h2 className="top-text">{memeImage.topText}</h2>
                <h2 className="bottom-text">{memeImage.bottomText}</h2>
            </div>
        </>
    )
}