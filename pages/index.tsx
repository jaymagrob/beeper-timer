import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Audio from '../components/audio';
import Settings from '../components/settings';

export default function Home() {
  const [time, setTime] = useState(0)
  const [countdown, setCountdown] = useState(5)
  const [nextBeep, setNextBeep] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const query = router.query;
    if (query.s != null) {
      setTime(query.s);
    }
  }, [router.isReady]);

  useEffect(() => {
    // exit early when we reach 0
    if (!countdown) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add countdown as a dependency to re-rerun the effect
    // when we update it
  }, [countdown]);


  return (
    <>
      <Settings />
      <main>
      <h1>{time}</h1>
      <Audio count={time} />
      {countdown}
      </main>
    </>
  )
}
