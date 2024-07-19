import { useTranslation } from 'react-i18next';
import { cross, quest } from '../../../assets';
import Ico from '../Ico/Ico';
import styles from './FAQForm.module.scss'

interface IFAQ{
    onClick: () => void
}

interface IFAQModule{
    num: number,
    content: string
}

const FAQModule = ({num, content} : IFAQModule) => {
    return(
        <>
        <div className={styles.FAQModule}>
            <h1>{`0${num}`}</h1>
            <p>{content}</p>
        </div>
        </>
    )
}



const FAQForm = ({onClick} : IFAQ) => {
    const {t} = useTranslation()
    return (
        <>
        <div className={styles.FAQForm}>
            <div className={styles.FAQ_Block}>
                <img src={cross} className={styles.Cross} onClick={onClick} alt="" />
                <div className={styles.Header}>
                    <Ico img={quest} color={"linear-gradient(180deg, #0177FB 0%, #004CF4 100%)"} />
                    <h1 className={styles.Header_Title}>{t("FAQForm.title")}</h1>
                </div>
                <div className={styles.Modules}>
                    <FAQModule
                        num={1}
                        content={t("FAQForm.step1")}
                    />
                    <FAQModule
                        num={2}
                        content={t("FAQForm.step2")}
                    />
                    <FAQModule
                        num={3}
                        content={t("FAQForm.step3")}
                    />
                    <FAQModule
                        num={4}
                        content={t("FAQForm.step4")}
                    />
                </div>
            </div>
        </div>
        </>
    );
}
 
export default FAQForm;