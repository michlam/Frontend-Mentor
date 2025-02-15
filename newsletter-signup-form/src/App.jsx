import { useState } from 'react'
import MainComponent from './components/MainComponent.jsx';
import SubmittedComponent from './components/SubmittedComponent.jsx';
import './App.css'

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  function login(event) {
    event.preventDefault();

    // Validate email format:
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = (emailRegex.test(document.getElementById("email").value));

    if (isValidEmail) {
      event.target.submit();
      setSubmitted(true);
    } else {
      setError(true);
    }
  }

  return (
    <>
      {!submitted ? <MainComponent login={login} error={error}/> : <SubmittedComponent />}
      <p className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/michlam" target="_blank">Michael Lam</a>.
      </p>
    </>
  )
}

export default App



{/* <body> 

 Sign-up form start 

  Stay updated!

  Join 60,000+ product managers receiving monthly updates on:

  Product discovery and building what matters
  Measuring to ensure updates are a success
  And much more!

  Email address
  email@company.com

  Subscribe to monthly newsletter -->

  <!-- Sign-up form end -->

  <!-- Success message start -->
<!-- 
  Thanks for subscribing!

  A confirmation email has been sent to ash@loremcompany.com. 
  Please open it and click the button inside to confirm your subscription.

  Dismiss message -->

  <!-- Success message end -->
  
  <!-- <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div> */}
