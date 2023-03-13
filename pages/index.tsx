import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Audio from '../components/audio';
import LongButton from '../components/longButton';

export default function Home() {
  const [time, setTime] = useState(0)
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const query = router.query;
    if (query.s != null) {
      setTime(query.s);
    }
  }, [router.isReady]);

  const onclick = (positive: boolean) => {
    return () => {
      let newTime;
      if(positive) {
        newTime =  time + 1
      } else {
        newTime =  time === 0 ? 0 : time - 1;
      }
        setTime(newTime)
        router.query.s = newTime
        router.push(router);
    }
  }
  
  return (
    <>
      <LongButton
        callback={onclick(true)}
        label="+"
      />
      <LongButton
        callback={onclick(false)}
        label="-"
      />
      <h1>{time}</h1>
      <Audio count={time} />
    </>
  )
}
