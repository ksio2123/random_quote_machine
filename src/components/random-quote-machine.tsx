'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Twitter } from "lucide-react"
import quotes from '@/public/quotes.json'

export function RandomQuoteMachineComponent() {
  const [quoteNum, setQuoteNum] = useState(Math.floor(Math.random() * quotes.quotes.length))

  const getNewQuote = () => {
    setQuoteNum(Math.floor(Math.random() * quotes.quotes.length))
  }
  const quote = quotes.quotes[quoteNum].quote;
  const author = quotes.quotes[quoteNum].author;

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500 p-4">
      <Card id="quote-box" className="w-full max-w-xl bg-white">
        <CardContent className="p-6">
          <blockquote id="text" className="text-2xl font-semibold text-center mb-4">
            &quot;{quote}&quot;
          </blockquote>
          <p id="author" className="text-right text-lg">
            - {author}
          </p>
        </CardContent>
        <CardFooter className="flex justify-between p-6">
          <Button id="new-quote" onClick={getNewQuote} className="bg-blue-500 hover:bg-blue-600 text-white">
            New quote
          </Button>

          <a
            id="tweet-quote"
            href="https://twitter.com/intent/tweet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-400 text-white hover:bg-blue-500 h-10 px-4 py-2"
          >
            <Twitter className="w-5 h-5 mr-2" />
            Tweet
          </a>
        </CardFooter>
      </Card>
    </div>
  )
}
