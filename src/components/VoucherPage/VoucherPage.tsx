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
    const [voucher, setVoucher] = useState<number>()
    const [err, setErr] = useState(false)
    const handleChange = (event: any) => setVoucher(event.target.value)
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
                    <Input
                        currency='MGM'
                        value={voucher ? voucher.toString() : null}
                        onChange={handleChange}
                    />
                    {err && <p style={{color: "#F8173E"}}>{t("Error")}</p>}
                </div>
                <div className={styles.BuyForm_Input}>
                    <p>{t("VoucherPage.input2")}</p>
                    <Input
                        currency='USDT'
                        isDisabled={true}
                        value={voucher ? (voucher / 9).toFixed(2) : null}
                    />
                </div>
                <div style={{marginTop: "4px"}}>
                    <Button
                        text={t("VoucherPage.Btn")}
                        onClick={() => {
                            if (voucher != undefined && (voucher % 10) == 0){
                                setErr(false)
                                nav("/pay")
                            }
                            else{
                                setErr(true)
                            }
                        }}
                    />
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