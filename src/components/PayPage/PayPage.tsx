import { useTranslation } from 'react-i18next';
import { logo } from '../../assets';
import InfoBlock from '../ui/InfoBlock/InfoBlock';
import Input from '../ui/Input/Input';
import Warning from '../ui/Warning/Warning';
import styles from './PayPage.module.scss'

const PayPage = () => {
    const {t} = useTranslation()
    return (
        <>
        <div className={styles.PayPage}>
            <InfoBlock
                icon={logo}
                title={t("PayPage.title")}
                content={t("PayPage.content")}
                maxWidth={"318px"}
            />
            <div className={styles.PayBlock}>
                <div className={styles.Inputs}>
                    <div className={styles.Inputs_Input}>
                        <p>{t("PayPage.input1")}</p>
                        <Input />
                    </div>
                    <div className={styles.Inputs_Input}>
                        <p>{t("PayPage.input2")}</p>
                        <Input />
                    </div>
                </div>
                <Warning
                    title={t("PayPage.warning.title")}
                    content={t("PayPage.warning.content")}
                />
                <div className={styles.StatusBlock}>
                    <div className={styles.StatusBlock_Time}>
                        <p>{t("PayPage.time")}</p>
                        <p>0:59:33</p>
                    </div>
                    <div className={styles.StatusBlock_Status}>
                        <p>{t("PayPage.status")}</p>
                        <span>{t("PayPage.wait")}</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default PayPage;