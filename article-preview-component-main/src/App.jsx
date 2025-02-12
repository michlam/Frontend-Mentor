import { useState } from 'react'
import './App.css'
import ShareComponent from './ShareComponent';

function App() {
  const [shareClicked, setShareClicked] = useState(false);

  return (
    <>
      <main>
        <div className='thumbnail'>
          <img src="/src/images/drawers.jpg" alt='Drawers thumbnail'/>
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
            <img className='avatar' src='/src/images/avatar-michelle.jpg' />
            <div className='author-container'>
              <h4>Michelle Appleton</h4>
              <p>28 Jun 2020</p>
            </div>

            <div className='share-icon'>
              <img src='/src/images/icon-share.svg'></img>
            </div>
            {shareClicked ? <ShareComponent /> : null}
          </div>
        </section>
      </main>
    
    </>
  )
}

export default App

