import React, { useState, useEffect } from 'react'
import Head from 'next/head'
// import Image from "next/image";
import Layout from '../components/Layout'

const useYeaaapSound = (increaseCounter: Function) => {
  const play = () => {
    const audio = new Audio('../assets/yeap_sound.mp3')
    audio.play()
    increaseCounter()
  }

  return { play }
}

const useYeaaapCounter = () => {
  const [yeaaapCount, updateYeaaapCount] = useState(0)
  const [globalCount, setGlobalCount] = useState(0)

  // Load counts on component mount
  useEffect(() => {
    const storedLocal = localStorage.getItem('localYeaaapCount')
    const storedGlobal = localStorage.getItem('globalYeaaapCount')
    
    if (storedLocal) {
      updateYeaaapCount(parseInt(storedLocal))
    }
    if (storedGlobal) {
      setGlobalCount(parseInt(storedGlobal))
    }
  }, [])

  const increaseCount = () => {
    const newLocalCount = yeaaapCount + 1
    const newGlobalCount = globalCount + 1
    
    updateYeaaapCount(newLocalCount)
    setGlobalCount(newGlobalCount)
    
    // Save to localStorage
    localStorage.setItem('localYeaaapCount', newLocalCount.toString())
    localStorage.setItem('globalYeaaapCount', newGlobalCount.toString())
  }

  return {
    count: yeaaapCount,
    globalCount,
    increase: increaseCount,
  }
}

export default function Home() {
  const yeaaapCounter = useYeaaapCounter()
  const yeaaapSound = useYeaaapSound(yeaaapCounter.increase)

  return (
    <Layout>
      <Head>
        <title>YEAAAAAAAAP! - FIXED GLOBAL COUNTER</title>
        <meta name="description" content="One big ol' Yeaaap party with global counter!" />
        <link rel="icon" href="/henry-favicon.png" />
      </Head>

      <div className="home">
        <h1 className="title">YEAAAAAAAAP!</h1>
        <div className="crazy_images">
          <div className="left">
            <h2 className="meet_our_founders">Meet Our Founders...</h2>
            <div className="menu_left">
              <img alt="nick" src="../assets/nick.jpg" />
              <p className="quote">
                Only now is the child finally divested of all that he has been.
                His origins are become remote as is his destiny and not again in
                all the world&apos;s turning will there be terrains so wild and
                barbarous to try whether the stuff of creation may be shaped to
                man&apos;s will or whether his own heart is not another kind of
                clay.
              </p>
            </div>
            <div className="menu_right">
              <img alt="levi" src="../assets/levi.jpg" />
              <p className="quote">
                I&apos;d rather laugh with the sinners than cry with the saints,
                the sinners have much more fun.
              </p>
            </div>
            <div className="menu_left">
              <img alt="henry" src="../assets/henry.jpg" />
              <p className="quote">hangin&apos; round</p>
            </div>
          </div>
          <div className="right">
            <img className="main_image" alt="zati" src="../assets/zati.jpg" />
          </div>
        </div>
        <div>
          <button onClick={yeaaapSound.play}>Yeaaap!</button>
          <p>You have yeappped {yeaaapCounter.count} times.</p>
          <p>🌍 Global yeaaaps: {yeaaapCounter.globalCount.toLocaleString()}</p>
          <audio src="require(../assets/yeap_sound.mp3)"></audio>
        </div>
      </div>
    </Layout>
  )
}
