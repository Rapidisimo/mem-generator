import trollFace from '../assets/tf.png'

export default function Header() {

  return (
    <>
        <header>
          <div className='app-title'>
            <img src={trollFace} alt="troll-face" />
            <h1>Meme Generator</h1>
          </div>
          <div>
            <h2>React Course - Project 3</h2>
          </div>
        </header>
    </>
  )
}
