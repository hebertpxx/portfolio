import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa'

import styles from './SocialNetworks.module.css'
import './SocialNetworks.css'

const socialNetworks = [
    {name: 'linkedin', link: 'https://www.linkedin.com/in/roberto-hebert-de-souza-vinha-86a08321/', icon: <FaLinkedin />},
    {name: 'github', link: 'https://github.com/hebertpxx', icon: <FaGithub />},
    {name: 'instagram', link: 'https://www.instagram.com/roberto_hebert_sv/', icon: <FaInstagram />},
    {name: 'facebook', link: 'https://www.facebook.com/hebert.desouzavinha/', icon: <FaFacebook />},
]

const SocialNetworks = () => {
    return (
        <section id={styles.social_networks}>
            {socialNetworks.map((network) => (
                <a
                    href={network.link}
                    target="_blank"
                    className={`${styles.social_btn} ${network.name}`}
                    id={network.name}
                    key={network.name}
                >
                        {network.icon}
                </a>
            ))}
        </section>
    )
}

export default SocialNetworks