import { useEffect, useState } from 'react';
import Birthday from './components/Birthday';


function App() {

  const [second, setSecond] = useState(0)
  const [minute, setMinute] = useState(0)
  const [hour, setHour] = useState(0)

  // let interval = useRef();
  const setClock = () => {
    setInterval(() => {
      const currentDate = new Date();
      let secondRatio = currentDate.getSeconds() / 60;
      let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
      let hourRatio = (minuteRatio + currentDate.getHours()) / 12;


      setSecond(secondRatio);
      setMinute(minuteRatio);
      setHour(hourRatio)

      setSecond({ secondRatio: secondRatio = currentDate.getSeconds() / 60 })
      setMinute({ minuteRatio: minuteRatio = (secondRatio + currentDate.getMinutes()) / 60 })
      setHour({ hour: hourRatio = (minuteRatio + currentDate.getHours()) / 12 });
    }, 1000)
  }


  useEffect(() => {
    setClock()
    return () => {
      clearInterval()
    }
  }, [])


  return (
    <>
    <Birthday />
      {/* <Clock second={second} minute={minute} hour={hour} /> */}
    </>
  )
}

export default App;
