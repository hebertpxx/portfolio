import Avatar from '../img/rhsv.jpg'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'
import Button from './Button'

import styles from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <aside id={styles.sidebar}>
            <img src={Avatar} alt="Roberto Hebert de Souza Vinha" />
            <p className={styles.title}>Desenvolvedor</p>
            <SocialNetworks />
            <InformationContainer />
            <Button
                href="https://drive.google.com/file/d/1-eQyCr4a2nd_TqcMG5rbEvBUkVvzt5z1/view?usp=share_link"
                target="blank"
                text="Download do Currículo"
            />
        </aside>
    )
}

export default Sidebar