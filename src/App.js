import Confetti from 'react-confetti'
import React, { useState } from 'react'
import './App.css'
import music from './audio/birthday.mp3'
// import music1 from './audio/happy.mp3'
import ReactAudioPlayer from 'react-audio-player'


function App() {
  const [hidden, setHidden] = useState(false);
  const [change, setChange] = useState('');


  function getChange(e) {
    setChange(e.target.value)
  }

  return (
    <div className="app">


      <div className="left"></div>


      <div className="center">

        {
          hidden ? (
            <ReactAudioPlayer
              className="confetti-hidden"
              src={music}
              preload="auto"
              autoPlay
              controls
            />
          ) : null
        }

        {hidden ? <h1>{change} Tug`ilgan Kuning Muborak !</h1> : <h1>Salom Sardor a.k.a 😁</h1>}
        <br />
        <hr />
        <br />
        <div className="div">
          {hidden ? (
            <div className="left2">
              😍
            </div>
          ) : null}
          <div className="center2">
            <h3>11.11.1998</h3>
            <br />
            <h3>11.11.2021</h3>
          </div>
          {hidden ? (
            <div className="right2">
              😍
            </div>
          ) : null}
        </div>

        <br />
        <hr />
        {hidden ? (
          <span className="text">
            Allohim shu kunga yetkazganinga va ko`rsatganinga shukur o`zimmi baxtimga o`zim sog` boliii !!! 😜😜😜
          </span>
        ) : (
          <div>
            <span className="text">Tugmani bosishdan oldin ismingizni kiriting!!!</span>
            <br />
            <div className="input1">
              <input className="input" onChange={getChange} type="text" placeholder="Iltimos ismingizni kiriting !!!" />
            </div>
            <span
              className={change === "" ? "error" : "typing"}
            >
              {change === "" ? "To`ldirilishi shart !!!" : "To`ldirilmoqda ..."}
            </span>
          </div>
        )}
        <br />
        <br />
        <div className="button">
          {change !== "Sardor" ? (
            <button className="btn" disabled>
              Disabled
            </button>
          ) : (
            <button
              className="btn"
              onClick={() => change && hidden === true ? setHidden(false) : setHidden(true)}
            >
              <Confetti
                className={hidden ? "confetti" : "confetti-hidden"}
                width={1300}
                height={620}
                gravity={hidden !== true ? -1 : 0.1}
              />
              {change !== "" ? "Happy Birthday" : "Click me"}
            </button>)}
        </div>
      </div>


      <div className="right"></div>

    </div>
  );
}

export default App;
