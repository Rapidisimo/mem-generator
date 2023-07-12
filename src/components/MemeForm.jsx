import React from "react";


export default function MemeForm() {

    /**
     * Challenge: 
     * ✅ As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * ✅ When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * ✅ Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * (I don't there are any, unless you want a complete set of new memes)
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */

    
    function handleSubmit(e) {
        e.preventDefault()
        const randomMemeNumber = Math.floor( Math.random() * allMemes.length);
        setMemeImage(prevDate => {
            return {
                ...prevDate, randomImage: allMemes[randomMemeNumber].url
            }
        })
    }

    const [memeImage, setMemeImage] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect( () => {
        console.log('React useEffect Ran')
        fetch('https://api.imgflip.com/get_memes')
            .then( (response) => response.json())
            .then( (data) => setAllMemes(data.data.memes))
    },[])


    function handleChange(e) {
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