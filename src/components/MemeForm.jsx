import memesData from "../memesData"

export default function MemeForm() {
    function handleSubmit(e) {
        e.preventDefault()
        const dataArray = memesData.data.memes;
        const randomMemeNumber = Math.floor( Math.random() * dataArray.length);
        console.log(dataArray[randomMemeNumber].url)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="top-text" hidden>Top Text</label>
            <input type="text" id="top-text" name="top-text" placeholder="Top Text"/>
            <label htmlFor="bottom-text" hidden>Bottom Text</label>
            <input type="text" id="bottom-text" name="bottom-text" placeholder="Bottom Text"/>
            <button>Get a New meme Image 🖼️</button>
        </form>
    )
}