import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Audio from '../components/audio';
import Settings from '../components/settings';

export default function Home() {
  const [time, setTime] = useState(30)
  const [countdown, setCountdown] = useState(time)
  const router = useRouter();
  const [startTime, setStartTimer] = useState(false)
  const [interval, setInterval2] = useState(null)

  const [color, setColor] = useState('#083D77')
  const [textColor, setTextColor] = useState('#eee')

  useEffect(() => {
    if (typeof window !== "undefined") {
      const bgColorStore = localStorage.getItem('bgColor')
      const textColorStore = localStorage.getItem('textColor')

      if (bgColorStore) {
        setColor(bgColorStore);
      }
      if (textColorStore) {
        setTextColor(textColorStore);
      }

    }
  }, []);

  useEffect(() => {
    if (!router.isReady) return;
    const query = router.query;
    if (query.s != null) {
      setTime(query.s as any);
      setCountdown(query.s as any);
    }
  }, [router.isReady]);

  useEffect(() => {
    // exit early when we reach 0
    if (!startTime) return;

    if (!countdown) {
      clearInterval(interval);
      setInterval2(setInterval(() => {
        countdown === 0 ? setCountdown(time) : setCountdown(countdown - 1);
      }, 1000))
    } else {
      // save interval to clear the interval when the
      // component re-renders
      setInterval2(setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000));
    };

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(interval);
    // add countdown as a dependency to re-rerun the effect
    // when we update it
  }, [countdown, startTime]);


  return (
    <>
      <Settings
        onColorChange={setColor}
        onTextColorChange={setTextColor}
        bgColor={color}
        textColor={textColor}
        currentSetting={time}
        onChange={(newNumber) => {
          clearInterval(interval)
          setTime(newNumber);
          setCountdown(newNumber);
        }}
      />
      <main style={{ color: textColor, background: color }}>
        <p>Beeping in</p>
        <p>{countdown}</p>
        <p>seconds</p>
        {!startTime && <button className="start-button" onClick={() => setStartTimer(true)}>Start Timer</button>}
        <Audio count={countdown} />
      </main>
    </>
  )
}
