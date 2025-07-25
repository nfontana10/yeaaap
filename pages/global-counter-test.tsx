import React from 'react'
import Head from 'next/head'

export default function GlobalCounterTest() {
  return (
    <>
      <Head>
        <title>Global Counter Test - WORKING!</title>
      </Head>
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h1>🚀 GLOBAL COUNTER IS WORKING! 🚀</h1>
        <p>If you can see this page, the deployment is working!</p>
        <p>Go back to <a href="/">the main page</a> to see the global counter.</p>
      </div>
    </>
  )
} 