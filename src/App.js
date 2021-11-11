import Confetti from 'react-confetti'
import React, { useState } from 'react'
import './App.css'
import music from './audio/birthday.mp3'
// import music2 from './audio/Muzanova_file.mp3'
// import music1 from './audio/happy.mp3'
import ReactAudioPlayer from 'react-audio-player'
import Typical from 'react-typical'


function App() {
  const [hidden, setHidden] = useState(false);
  const [change, setChange] = useState('');



  return (
    <div className="app">
      <div className="left"></div>
      <div className="center">
        {
          hidden ? (
            <ReactAudioPlayer
              className="confetti-hidden"
              src={music}
              autoPlay
              controls
            />
          ) : (null
            // <ReactAudioPlayer
            //   className="confetti-hidden"
            //   src={music2}
            //   autoPlay
            //   controls
            // />
          )
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
          {
            change === "Hakimjon" ? (
              <div className="center2">
                <h3>04.11.1990</h3>
                <br />
                <h3>04.11.2021</h3>
              </div>
            ) : (
              <div className="center2">
                <h3>__.__.____</h3>
                <br />
                <h3>__.__.2021</h3>
              </div>
            ) && change === "Sirojiddin" ? (
              <div className="center2">
                <h3>12.04.2003</h3>
                <br />
                <h3>12.04.2021</h3>
              </div>
            ) : (
              <div className="center2">
                <h3>__.__.____</h3>
                <br />
                <h3>__.__.2021</h3>
              </div>
            ) && change === "Sardor" ? (
              <div className="center2">
                <h3>11.11.1998</h3>
                <br />
                <h3>11.11.2021</h3>
              </div>
            ) : (
              <div className="center2">
                <h3>__.__.____</h3>
                <br />
                <h3>__.__.2021</h3>
              </div>
            ) && change === "Sardorbek" ? (
              <div className="center2">
                <h3>11.11.1998</h3>
                <br />
                <h3>11.11.2021</h3>
              </div>
            ) : (
              <div className="center2">
                <h3>__.__.____</h3>
                <br />
                <h3>__.__.2021</h3>
              </div>
            )
          }

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
              <input
                className="input"
                onChange={(e) => setChange(e.target.value)}
                type="text"
                placeholder="Iltimos ismingizni kiriting !!!"
              />
            </div>
            <span
              className={change === "" ? "error" : "typing"}
            >
              {change === "" ? (
                <>
                  <Typical
                    loop={Infinity}
                    wrapper="p"
                    steps={['To`ldirilishi shart !!!', 2000, 'To`ldirish qiyinmasu aka 😕😕😕', 2000, 'To`ldiree oneniii 😡😡😡', 3000,]}
                  />
                </>
              ) : (
                "To`ldirilmoqda ..."
              )}
            </span>
          </div>
        )}
        <br />
        <br />
        <div className="button">
          {change !== "Sardor" && change !== "Sirojiddin" && change !== "Hakimjon" && change !== "Sardorbek" ? (
            <button className="btn1" disabled>
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
              {!hidden ? "Happy Birthday" : "Exit"}
            </button>)}
        </div>
      </div>

      <div className="right"></div>
    </div>
  );
}

export default App;
