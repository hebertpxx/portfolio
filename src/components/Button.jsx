import styles from './Button.module.css'

const Button = ({href, target="blank", text}) => {
    return (
        <>
            <a href={href} target={target} className={styles.btn} >{text}</a>
        </>
    )
}

export default Button