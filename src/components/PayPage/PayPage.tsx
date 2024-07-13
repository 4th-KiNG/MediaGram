import { logo } from '../../assets';
import InfoBlock from '../ui/InfoBlock/InfoBlock';
import Input from '../ui/Input/Input';
import Warning from '../ui/Warning/Warning';
import styles from './PayPage.module.scss'

const PayPage = () => {
    return (
        <>
        <div className={styles.PayPage}>
            <InfoBlock
                icon={logo}
                title={"Ваучеры MGM"}
                content={"Не упустите свой шанс стать частью будущего цифровой рекламы вместе с Mediagram!"}
                maxWidth={"318px"}
            />
            <div className={styles.PayBlock}>
                <div className={styles.Inputs}>
                    <div className={styles.Inputs_Input}>
                        <p>Адрес</p>
                        <Input />
                    </div>
                    <div className={styles.Inputs_Input}>
                        <p>Сумма оплаты USDT</p>
                        <Input />
                    </div>
                </div>
                <Warning content={"Переводите на данный адрес только токены USDT сети TON (The Open Network), иначе вы безвозвратно потеряете свои средства."}/>
                <div className={styles.StatusBlock}>
                    <div className={styles.StatusBlock_Time}>
                        <p>Время до оплаты:</p>
                        <p>0:59:33</p>
                    </div>
                    <div className={styles.StatusBlock_Status}>
                        <p>Статус оплат:</p>
                        <span>Ожидает</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default PayPage;