import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div id="app">
      <div className="beer_corner">
        <img className="left" alt="leffe" src="./assets/leffe.png" />
        <img className="right" alt="changadang" src="./assets/chang.png" />
      </div>
      {children}
    </div>
  )
}
