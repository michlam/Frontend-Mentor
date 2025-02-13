import { useState } from 'react'
import './App.css'
import ShareComponent from './ShareComponent';
import DrawerImage from './images/drawers.jpg';
import AvatarImage from './images/avatar-michelle.jpg';
import ShareImage from './images/icon-share.svg';

function App() {
  const [shareClicked, setShareClicked] = useState(false);
  function handleClick() {
    setShareClicked((prev) => (!prev));
    console.log("It is now clicked: " + shareClicked);
  }

  return (
    <>
      <main>
        <div className='thumbnail'>
          <img src={DrawerImage} alt='Drawers thumbnail'/>
        </div>
        <section>
          <h1>
            Shift the overall look and feel by adding these wonderful 
            touches to furniture in your home
          </h1>

          <p>
            Ever been in a room and felt like something was missing? Perhaps 
            it felt slightly bare and uninviting. I’ve got some simple tips 
            to help you make any room feel complete.
          </p>

          <div className='contact-container'>
            <img className='avatar' src={AvatarImage} />
            <div className='author-container'>
              <h4>Michelle Appleton</h4>
              <p>28 Jun 2020</p>
            </div>

            <div className='share-icon' onClick={handleClick}>
              <img src={ShareImage}></img>
              {shareClicked ? <ShareComponent /> : null}
            </div>
          </div>
        </section>
      </main>
    
    </>
  )
}

export default App

