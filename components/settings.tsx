import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import LongButton from '../components/longButton';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

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
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
      <div className="settings-container">
        <div className="settings-nav">
          <a href="javascript:void(0);" className="icon" onClick={() => setShow(!show)}>
          <i className={`fa fa-${show ? 'times' : 'bars'}`} />
          </a>
        </div>
        {show && (
          <div className="settings-main">
            <LongButton
              callback={onclick(true)}
              label="+"
            />
            <LongButton
              callback={onclick(false)}
              label="-"
            />
            <button onClick={(e) => onSubmit(e)}>Set Time</button>
          </div>
        )}
      </div>

    </>

  )
}
