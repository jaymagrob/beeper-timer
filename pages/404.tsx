import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Audio from '../components/audio';


export default function Home() {
  const [time, setTime] = useState(0)
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const query = router.query;
    if(query.s != null) {
      setTime(query.s);
    }
  }, [router.isReady, router.query]);

  return (
    <>
      <button onClick={() => setTime(time + 1)}>ddd</button>
      <Audio count={time}/>
    </>
  )
}
