import {DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiMysql, DiReact} from 'react-icons/di'

import styles from './MainContent.module.css'
import './TechnologiesContainer.css'

const technologies = [
    {
        id: 'html',
        name: 'HTML5',
        description: 'Para inserção de elementos e semântica',
        icon: <DiHtml5 />
    },
    { 
        id: 'css',
        name: 'CSS3',
        description: 'Para estilização do design de sites e aplicações web',
        icon: <DiCss3 />
    },
    { 
        id: 'js',
        name: 'JavaScript',
        description: 'Para tornar as páginas mais dinâmicas e interativas',
        icon: <DiJsBadge />
    },
    { 
        id: 'node',
        name: 'Node.js',
        description: 'Ambiante de execução JavaScript',
        icon: <DiNodejsSmall />
    },
    { 
        id: 'mysql',
        name: 'MySQL',
        description: 'Definição de tabelas, armazenamento e manipulação de dados',
        icon: <DiMysql />
    },
    { 
        id: 'react',
        name: 'React',
        description: 'Biblioteca modular para reutilização de componentes',
        icon: <DiReact />
    },
]

const TechnologiesContainer = () => {
    return (
        <section className="technologies_container">
            <h2>Tecnologias</h2>
            <div className="technologies_grid">
                {technologies.map((technology) => (
                    <div className="technology_card" id={technology.id} key={technology.id}>
                        {technology.icon}
                        <div className="technology_info">
                            <h3>{technology.name}</h3>
                            <p>{technology.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechnologiesContainer