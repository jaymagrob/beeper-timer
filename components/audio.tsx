import { useEffect } from "react";

type Props = {
  count: number;
}

export default function AudioFun(props: Props) {
  const { count } = props;

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

