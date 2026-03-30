import { useState, useEffect } from 'react'

const phrases = [
  'Multi-bank consolidation.',
  'No data leaves your machine.',
  'Private. Offline. Professional.',
  'Unified across all custodians.',
]

export default function TypeWriter() {
  const [idx, setIdx]           = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting]   = useState(false)

  useEffect(() => {
    const phrase = phrases[idx]

    if (!deleting && displayed.length < phrase.length) {
      const t = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 55)
      return () => clearTimeout(t)
    }
    if (!deleting && displayed.length === phrase.length) {
      const t = setTimeout(() => setDeleting(true), 2200)
      return () => clearTimeout(t)
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
      return () => clearTimeout(t)
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false)
      setIdx((i) => (i + 1) % phrases.length)
    }
  }, [displayed, deleting, idx])

  return (
    <span>
      {displayed}
      <span className="text-accent animate-pulse">|</span>
    </span>
  )
}
