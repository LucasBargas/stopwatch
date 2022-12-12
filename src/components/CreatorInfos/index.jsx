import React from 'react';
import styles from './styles.module.scss';

const CreatorInfos = () => {
  return (
    <section className={styles.CreatorInfosContainer}>
      <p>
        Este cronômetro foi desenvolvido com <span>♥</span> por <a href="https://projetoslucasbargas.vercel.app/" target="_blank" rel="noopener noreferrer">Lucas Bargas</a>
      </p>
      <a href="https://github.com/LucasBargas/stopwatch" target="_blank" rel="noopener noreferrer">Clique aqui para visualizar o repositório no GitHub</a>
    </section>
  )
}

export default CreatorInfos