import styles from './Input.module.scss'

interface IInput{
    currency?: string
}

const Input = ({currency}: IInput) => {
    return (
        <>
        <div className={styles.Input}>
            <input type="text" />
            <p>{currency}</p>
        </div>
        </>
    );
}
 
export default Input;