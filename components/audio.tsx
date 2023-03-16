import React, { useEffect, createRef } from "react";

export default function AudioFun({ count }) {
  const audioRef = createRef();

  useEffect(() => {
    if (count === 0) {
      var audio = new Audio('/beep.wav');
      audio.play();
    }
  }, [count])

  return (
    null
  )
};

