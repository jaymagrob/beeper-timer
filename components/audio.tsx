import React, { useEffect, createRef } from "react";

export default function Audio({ count }) {
  const audioRef = createRef();

  useEffect(() => {
    if(count === 0) {
      audioRef.current.play();
    }
  }, [count])

  return (
    <>
      <audio src="/beep.wav" ref={audioRef} />
    </>
  )
};

