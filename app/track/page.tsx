// This enables React hooks and client-side behavior
'use client'

// Import React tools for handling state and side effects
// We'll use useState to hold today's entry, and useEffect to load saved ones
import { useState, useEffect } from 'react'

export default function TrackPage() {
  // This holds the user's gratitude input (what they're writing right now)
  const [entry, setEntry] = useState('')

  // This holds all past entries saved in the browser
  const [history, setHistory] = useState<string[]>([])

  // When the page loads, check localStorage for past entries and load them
  useEffect(() => {
    const saved = localStorage.getItem('gratitrack-entries')
    if (saved) {
      setHistory(JSON.parse(saved))
    }
  }, [])

  // When the user clicks "Save", add the entry to history and localStorage
  const handleSubmit = () => {
    if (!entry.trim()) return // Don’t save if it’s empty or just spaces

    const updated = [entry, ...history] // Add the newest entry to the top
    setHistory(updated) // Update the visible list
    localStorage.setItem('gratitrack-entries', JSON.stringify(updated)) // Save to browser
    setEntry('') // Clear the input for the next one
  }

  // UI layout
  return (
    <main 
      className='min-h-screen bg-[#F9F9F6] px-4 py-20 text-center'
    >
      {/* this is the page title */}
      <h1
        className='text-3xl font-semibold mb-10'
      >
        What are you grateful for today?
      </h1>
      
      {/* this area holds the input box and the save button */}
      <div
        className='flex flex-col items-center gap-4 max-w-xl mx-auto'
      >
        {/* input field */}
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder='Just one thing...'
          className='w-full h-28 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A3C9A8] resize-none bg-white text-[#333]'
        />

        {/* save button */}
        <button
          onClick={handleSubmit}
          className='px-6 py-3 bg-[#A3C9A8] text-white rounded-full hover:bg-[#B7D8B3] transition'
        >
          Save Entry
        </button>
      </div>
    </main>
  )
}
