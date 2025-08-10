import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

const COUNTER_FILE = path.join(process.cwd(), 'data', 'counter.json')

// Ensure data directory exists
const ensureDataDir = () => {
  const dataDir = path.dirname(COUNTER_FILE)
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
}

// Read current counter value
const readCounter = (): number => {
  try {
    ensureDataDir()
    if (fs.existsSync(COUNTER_FILE)) {
      const data = fs.readFileSync(COUNTER_FILE, 'utf8')
      return JSON.parse(data).count || 0
    }
  } catch (error) {
    console.error('Error reading counter:', error)
  }
  return 0
}

// Write counter value
const writeCounter = (count: number) => {
  try {
    ensureDataDir()
    fs.writeFileSync(COUNTER_FILE, JSON.stringify({ count, lastUpdated: new Date().toISOString() }))
  } catch (error) {
    console.error('Error writing counter:', error)
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Return current counter value
    const count = readCounter()
    res.status(200).json({ count })
  } else if (req.method === 'POST') {
    // Increment counter
    const currentCount = readCounter()
    const newCount = currentCount + 1
    writeCounter(newCount)
    res.status(200).json({ count: newCount })
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
