import AboutContainer from './AboutContainer'
import TechnologiesContainer from './TechnologiesContainer'
import ProjectsContainer from './ProjectsContainer'

import styles from './MainContent.module.css'

const MainContent = () => {
    return (
        <main id={styles.main_content}>
            <AboutContainer />
            <TechnologiesContainer />
            <ProjectsContainer />
            
        </main>
    )
}

export default MainContent