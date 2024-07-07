import styles from './NaoEncontrada.module.css';
import erro404 from './not-found.png';

function NaoEncontrada() {
    return (
        <>
            <section className={styles.container}>
                <img src={erro404} alt='Erro 404' />
                <h2>Ops!</h2>
                <p>O conteúdo que você procura não foi encontrado.</p>
            </section>
        </>
    )
}

export default NaoEncontrada;