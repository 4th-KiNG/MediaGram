import styles from './Button.module.scss'

interface BtnProps{
    text: string,
    onClick?: () => void
}   

const Button = ({text, onClick}: BtnProps) => {
    return (
        <>
        <button className={styles.Button} onClick={onClick}><p>{text}</p></button>
        </>
    );
}
 
export default Button;