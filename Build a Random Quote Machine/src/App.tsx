import { useState } from 'react'
import quotes from './assets/quotes.json'
import './App.css'

interface Quote {
  quote: string
  author: string
}

const getRandomQuote = ():Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());

  const newQuote = () => {
    setQuote(getRandomQuote())
  }
  return (
    <>
      <div id="quote-box">
        <h1 id="text">"{quote.quote}"</h1>
        <h2 id="author">- {quote.author}</h2>
        <button id="new-quote" onClick={newQuote}>New Quote</button>
        <a id="tweet-quote" target="_blank" href="twitter.com/intent/tweet">Tweet Quote</a>
      </div>
    </>
  )
}


export default App
