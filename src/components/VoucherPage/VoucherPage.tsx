import { useState } from 'react';
import { logo } from '../../assets';
import Button from '../ui/Button/Button';
import FAQ from '../ui/FAQ/FAQ';
import InfoBlock from '../ui/InfoBlock/InfoBlock';
import Input from '../ui/Input/Input';
import styles from './Voucher.module.scss'
import FAQForm from '../ui/FAQForm/FAQForm';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const VoucherPage = () => {
    const nav = useNavigate()
    const {t} = useTranslation()
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <div className={styles.VoucherPage}>
            <InfoBlock
                maxWidth={"318px"}
                title={t("VoucherPage.title")}
                content={t("VoucherPage.content")}
                icon={logo}
            />
            <div className={styles.BuyForm}>
                <div className={styles.BuyForm_Input}>
                    <p>{t("VoucherPage.input1")}</p>
                    <Input currency='MGM' />
                </div>
                <div className={styles.BuyForm_Input}>
                    <p>{t("VoucherPage.input2")}</p>
                    <Input currency='USDT' />
                </div>
                <div style={{marginTop: "4px"}}>
                    <Button text={t("VoucherPage.Btn")} onClick={() => {nav("/pay")}} />
                </div>
                <div style={{marginTop: "24px"}}>
                    <FAQ
                        title={t("VoucherPage.FAQ.title")}
                        content={t("VoucherPage.FAQ.more")}
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