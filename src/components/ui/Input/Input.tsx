import styles from './Input.module.scss'

interface IInput{
    value: string | null
    isDisabled?: boolean,
    currency?: string,
    onChange?: (event: any) => void
}

const Input = ({currency, isDisabled, value, onChange}: IInput) => {
    return (
        <>
        <div className={styles.Input}>
            <input
                type="text"
                value={value ? value : ""}
                disabled={isDisabled}
                onChange={onChange}
            />
            <p>{currency}</p>
        </div>
        </>
    );
}
 
export default Input;