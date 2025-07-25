import type { NextApiRequest, NextApiResponse } from 'next'

// In-memory counter for demo purposes
// In production, you'd want to use a proper database
let globalCounter = 0

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Get current global count
    res.status(200).json({ count: globalCounter })
  } else if (req.method === 'POST') {
    // Increment global count
    globalCounter += 1
    res.status(200).json({ count: globalCounter })
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
} 