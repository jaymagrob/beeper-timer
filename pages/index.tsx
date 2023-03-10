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
  }, [router.isReady, router.query]);

  return (
    <>
      <LongButton
        callback={() => setTime(time + 1)}
        label="+"
      />
      <LongButton
        callback={() => setTime(time - 1)}
        label="-"
      />
      <h1>{time}</h1>
      <Audio count={time} />
    </>
  )
}
