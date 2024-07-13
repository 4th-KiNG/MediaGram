import styles from './Status.module.scss'

interface IStatus{
    address: string,
    sum: number,
    status: string,
    time: string
}


const Status = ({address, sum, status, time}: IStatus) => {
    return (
        <>
        <div className={styles.Status}>
            <div className={styles.Status_Line}>
                <p>Адрес:</p>
                <span>{address}</span>
            </div>
            <div className={styles.Status_Line}>
                <p>Сумма оплаты USDT:</p>
                <span>{sum} USDT</span>
            </div>
            <div className={styles.Status_Line}>
                <p>Статус оплат:</p>
                <span style={{color: "#42FFB0"}}>{status}</span>
            </div>
            <div className={styles.Status_Line}>
                <p>Время до оплаты:</p>
                <span>{time}</span>
            </div>
        </div>
        </>
    );
}
 
export default Status;