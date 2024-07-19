import { useState } from 'react';
import { questblue } from '../../assets';
import styles from './InfoPage.module.scss'
import Button from '../ui/Button/Button';
import InfoBlock from '../ui/InfoBlock/InfoBlock';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface IFAQBlock{
    title: string,
    content: string
}

const FAQBlock = ({title, content} : IFAQBlock) => {
    const [isOpen, setOpen] = useState(false)
    return(
        <>
        <div className={styles.FAQ_Block} onClick={() => setOpen(!isOpen)}>
            <div className={styles.FAQ_Block_Header}>
                <h2 className={styles.FAQ_Block_Title}>{title}</h2>
                <div className={styles.Plus}>
                    <div className={styles.Plus_Hor}/>
                    <div
                        className={styles.Plus_Vert}
                        style={{transform: `${isOpen ? "rotate(180deg)" : "rotate(90deg)"}`}}
                    />
                </div>
            </div>
            <p
                className={styles.FAQ_Block_Content}
                style={{display: `${isOpen ? "block" : "none"}`}}
            >
                {content}
            </p>
        </div>
        </>
    )
}

const InfoPage = () => {
    const nav = useNavigate()
    const {t} = useTranslation()
    return (
        <>
        <div className={styles.InfoPage}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    alignItems: "center"
                }}
            >
                <InfoBlock
                    title={t("InfoPage.title")}
                    icon={questblue}
                    maxWidth={"318px"}
                    fontSize={"24px"}
                />
                <div className={styles.FAQ}>
                    <FAQBlock 
                        title={t("InfoPage.FAQ1.title")} 
                        content={t("InfoPage.FAQ1.content")} 
                    />
                    <FAQBlock 
                        title={t("InfoPage.FAQ2.title")}
                        content={t("InfoPage.FAQ2.content")}
                    />
                    <FAQBlock 
                        title={t("InfoPage.FAQ3.title")}
                        content={t("InfoPage.FAQ3.content")}
                    />
                </div>
            </div>
            <Button text={t("InfoPage.Btn")} onClick={() => {nav("/voucher")}} />
        </div>
        </>
    );
}
 
export default InfoPage;