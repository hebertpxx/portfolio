import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

import styles from './InformationContainer.module.css'

const InformationContainer = () => {
    return (
        <section id={styles.information_container}>
            <div className={styles.info_card}>
                <AiFillPhone id={styles.phone_icon} />
                <div>
                    <h3>Telefone</h3>
                    <p>(17) 98122-8541</p>
                </div>
            </div>
            <div className={styles.info_card}>
                <AiOutlineMail id={styles.email_icon} />
                <div>
                    <h3>E-mail</h3>
                    <p>hebert.souzavinha@gmail.com</p>
                </div>
            </div>
            <div className={styles.info_card}>
                <AiFillEnvironment id={styles.pin_icon} />
                <div>
                    <h3>Localização</h3>
                    <p>São José do Rio Preto - SP</p>
                </div>
            </div>
        </section>
    )
}

export default InformationContainer