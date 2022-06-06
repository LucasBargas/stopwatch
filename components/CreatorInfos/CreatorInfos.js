import styles from './CreatorInfos.module.scss';

const CreatorInfos = () => {
  return (
    <section className={styles.CreatorInfosContainer}>
      <p>
        Este cronômetro foi desenvolvido com <span>♥</span> por <a href="https://projetoslucasbargas.com/" target="_blank" rel="noopener noreferrer">Lucas Bargas</a>
      </p>
      <a href="https://github.com/LucasBargas/stopwatch" target="_blank" rel="noopener noreferrer">Clique aqui para visualizar o repositótio no GitHub</a>
    </section>
  )
}

export default CreatorInfos