import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import LongButton from '../components/longButton';

type Props = {
  onChange: (newNumber: number) => void;
  currentSetting: number;
}

export default function Settings(props: Props) {
  const [time, setTime] = useState(props.currentSetting)
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
    props.onChange(time);
    setShow(false);
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
            {time}
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
