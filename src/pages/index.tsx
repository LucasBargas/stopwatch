import React, { useState, useRef } from 'react';
import CreatorInfos from '../components/CreatorInfos';
import styles from '../styles/Home.module.scss';

const Home = (): JSX.Element => {
  const timerRef = useRef<HTMLParagraphElement>();
  let [seconds, setSeconds] = useState<number>(0);
  let [timer, setTimer] = useState(undefined);

  const createHoursOfSeconds = (seconds: number): string => {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  const startTimer = (): void => {
    setTimer(timer = setInterval((): void => {
      setSeconds(seconds++);
      timerRef.current.innerText = createHoursOfSeconds(seconds);
    }, 1000))
  }

  const handleClickOnStart = (): void => {
    setTimer(clearInterval(timer));
    startTimer();
  }

  const handleClickOnClear = (): void => {
    setTimer(clearInterval(timer));
    timerRef.current.innerText = '00:00:00';
    setSeconds(0);
  }

  return (
    <section className={styles.stopWatchContainer}>
      <div className={styles.stopWatchArea}>
        <h1>CRONÔMETRO</h1>

        <p ref={timerRef} className={styles.timer}>00:00:00</p>

        <div className={styles.stopWatchButtons}>
          <button onClick={handleClickOnStart} className={styles.startButton}>Iniciar</button>
          <button onClick={() => setTimer(clearInterval(timer))} className={styles.pauseButton}>Pausar</button>
          <button onClick={handleClickOnClear} className={styles.clearButton}>Zerar</button>
        </div>
      </div>

      <CreatorInfos />
    </section>
  )
}

export default Home;
