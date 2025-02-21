import './App.css'
import Footer from "./components/Footer.jsx"
import Main from "./components/Main.jsx"
import Thanks from "./components/Thanks.jsx"
import {useState} from "react"

function App() {
  const [submitted, setSubmitted] = useState(true);
  const [rating, setRating] = useState(null);

  return (
    <>
      {!submitted ? <Main /> : <Thanks/>}
      <Footer />
    </>
  )
}

export default App
