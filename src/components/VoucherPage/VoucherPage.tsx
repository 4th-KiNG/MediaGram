import { useState } from 'react';
import { logo } from '../../assets';
import Button from '../ui/Button/Button';
import FAQ from '../ui/FAQ/FAQ';
import InfoBlock from '../ui/InfoBlock/InfoBlock';
import Input from '../ui/Input/Input';
import styles from './Voucher.module.scss'
import FAQForm from '../ui/FAQForm/FAQForm';
import { useNavigate } from 'react-router-dom';

const VoucherPage = () => {
    const nav = useNavigate()
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <div className={styles.VoucherPage}>
            <InfoBlock
                maxWidth={"318px"}
                title={"Ваучеры MGM"}
                content={"Будь в числе первых"}
                icon={logo}
            />
            <div className={styles.BuyForm}>
                <div className={styles.BuyForm_Input}>
                    <p>Введите количество токенов MGM, кратное 10</p>
                    <Input currency='MGM' />
                </div>
                <div className={styles.BuyForm_Input}>
                    <p>Стоимость ваучера в USDT</p>
                    <Input currency='USDT' />
                </div>
                <div style={{marginTop: "4px"}}>
                    <Button text={"Оплатить"} onClick={() => {nav("/pay")}} />
                </div>
                <div style={{marginTop: "24px"}}>
                    <FAQ
                        title={"Как приобрести ваучеры?"}
                        content={"Подробнее"}
                        maxWidth={"211px"}
                        onClick={() => setOpen(true)}
                    />
                </div>
            </div>
        </div>
        {isOpen && <FAQForm onClick={() => setOpen(false)} />}
        </>
    );
}
 
export default VoucherPage;