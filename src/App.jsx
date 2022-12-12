import React, { useState } from 'react';
import CreatorInfos from './components/CreatorInfos';
import styles from './App.module.scss';

function App() {
  const [timerValue, setTimerValue] = useState('00:00:00');
  let [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState(0);

  const createHoursOfSeconds = (seconds) => {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC',
    });
  };

  const startTimer = () => {
    setTimer(
      setInterval(() => {
        setSeconds(seconds++);
        setTimerValue(createHoursOfSeconds(seconds));
      }, 1000),
    );
  };

  const handleClickOnStart = () => {
    setTimer(clearInterval(timer));
    startTimer();
  };

  const handleClickOnClear = () => {
    setTimer(clearInterval(timer));
    setTimerValue('00:00:00');
    setSeconds(0);
  };

  return (
    <section className={styles.stopWatchContainer}>
      <div className={styles.stopWatchArea}>
        <h1>CRONÔMETRO</h1>

        <p className={styles.timer}>{timerValue}</p>

        <div className={styles.stopWatchButtons}>
          <button onClick={handleClickOnStart} className={styles.startButton}>
            Iniciar
          </button>
          <button
            onClick={() => setTimer(clearInterval(timer))}
            className={styles.pauseButton}
          >
            Pausar
          </button>
          <button onClick={handleClickOnClear} className={styles.clearButton}>
            Zerar
          </button>
        </div>
      </div>

      <CreatorInfos />
    </section>
  );
}

export default App;
