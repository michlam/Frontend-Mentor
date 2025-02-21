import './App.css'
import Footer from "./components/Footer.jsx"
import Main from "./components/Main.jsx"
import Thanks from "./components/Thanks.jsx"
import {useState} from "react"

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(null);

  return (
    <>
      {!submitted 
        ? <Main setRating={setRating} setSubmitted={setSubmitted} currentRating={rating}/> 
        : <Thanks/>}
      <Footer />
    </>
  )
}

export default App
