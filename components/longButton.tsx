import { useState, useEffect } from 'react';

type Props = {
  callback: () => void;
  label: string;
};

export default function longButton(props: Props) {
  const { callback, label } = props;
  const backspaceLongPress = UseLongPress(callback);

  return (
    <button {...backspaceLongPress}>
      {label}
    </button>
  );
};


export function UseLongPress(callback = () => { }, ms = 150) {
  const [startLongPress, setStartLongPress] = useState(false);

  useEffect(() => {
    let timerId;
    if (startLongPress) {
      timerId = setTimeout(callback, ms);
    } else {
      clearTimeout(timerId);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [callback, ms, startLongPress]);

  return {
    onMouseDown: () => {
      callback();
      setStartLongPress(true)
    },
    onMouseUp: () => setStartLongPress(false),
    onMouseLeave: () => setStartLongPress(false),
    onTouchStart: () => {
      callback();
      setStartLongPress(true)
    },
    onTouchEnd: () => setStartLongPress(false),
  };
}