import styles from './MainContent.module.css'

const AboutContainer = () => {
    return (
        <section className={styles.about_container}>
            <h2>Sobre</h2>
            <p>Aficionado por tecnologia e um grande entusiasta por codificação.
                Graduado em Informática para Negócios pela Fatec de São José do Rio Preto 🎓
            </p>
            <p>Desenvolvedor Front-End Júnior de aplicações web voltadas a negócios, fazendo uso das
                boas práticas recomendadas e das tecnologias mais apropriadas para cada caso.
            </p>
        </section>
    )
}

export default AboutContainer