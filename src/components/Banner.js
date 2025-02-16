import { useState, useEffect, useCallback } from "react";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  // Move toRotate array inside useCallback to avoid unnecessary dependencies
  const tick = useCallback(() => {
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"]; // Moved inside useCallback
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setLoopNum(prevLoopNum => prevLoopNum + 1); // Increment loopNum to move to the next text
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setDelta(500);
    }
  }, [isDeleting, loopNum, text, period]); // `toRotate` is now inside useCallback, so no longer needed in the dependencies

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [tick, delta]); // `tick` is memoized, so no need to worry about unnecessary re-renders

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};
