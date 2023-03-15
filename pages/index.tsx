import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Audio from '../components/audio';
import Settings from '../components/settings';

export default function Home() {
  const [time, setTime] = useState(0)
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const query = router.query;
    if (query.s != null) {
      console.log('here------234')
      setTime(query.s);
    }
  }, [router.isReady]);

  return (
    <>
      <Settings />
      <h1>{time}</h1>
      <Audio count={time} />
    </>
  )
}
