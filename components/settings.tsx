import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LongButton from '../components/longButton';

export default function settings() {
  const [time, setTime] = useState(30)
  const [show, setShow] = useState(false)
  const router = useRouter();

  const onclick = (positive: boolean) => {
    return () => {
      let newTime;
      if (positive) {
        newTime = time + 1
      } else {
        newTime = time === 0 ? 0 : time - 1;
      }
      setTime(newTime)
    }
  }
  

  const onSubmit = (e: React.FormEvent) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, s: time }
    },
      undefined,
      {}
    )
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
        <button onClick={(e) => onSubmit(e)}>Set Time</button>
    </>
  )
}
