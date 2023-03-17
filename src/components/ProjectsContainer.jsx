import Button from './Button'

import styles from './MainContent.module.css'

const ProjectsContainer = () => {
    return (
        <section className={styles.projects_container}>
            <h2>Projetos</h2>
            <p>Sinta-se à vontade para clicar no botão abaixo e conhecer os projetos do meu portfólio.
                Estou sempre buscando novos conhecimentos para desenvolver projetos cada vez mais ousados
                e que possam ser uma solução tecnológica que necessidades e apóie negócios.
            </p>
            <Button href="https://github.com/hebertpxx?tab=repositories" target="blank" text="Ver Projetos" />
        </section>
    )
}

export default ProjectsContainer