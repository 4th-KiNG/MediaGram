import { useTranslation } from 'react-i18next';
import styles from './Status.module.scss'

interface IStatus{
    address: string,
    sum: number,
    status: string,
    time: string
}


const Status = ({address, sum, status, time}: IStatus) => {
    const {t} = useTranslation()
    return (
        <>
        <div className={styles.Status}>
            <div className={styles.Status_Line}>
                <p>{t("StatusPage.address")}</p>
                <span>{address}</span>
            </div>
            <div className={styles.Status_Line}>
                <p>{t("StatusPage.sum")}</p>
                <span>{sum} USDT</span>
            </div>
            <div className={styles.Status_Line}>
                <p>{t("StatusPage.status")}</p>
                <span style={{color: "#42FFB0"}}>{status}</span>
            </div>
            <div className={styles.Status_Line}>
                <p>{t("StatusPage.time")}</p>
                <span>{time}</span>
            </div>
        </div>
        </>
    );
}
 
export default Status;