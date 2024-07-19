import { useTranslation } from 'react-i18next';
import { logo, play, roundTextEn, roundTextRu } from '../../assets';
import InfoBlock from '../ui/InfoBlock/InfoBlock';
import styles from './LoadingPage.module.scss'


const LoadingPage = () => {
    const {t, i18n} = useTranslation()
    return (
        <>
        <div className={styles.LoadingPage}>
            <InfoBlock
                title={t("LoadingPage.title")}
                content={t("LoadingPage.content")}
                icon={logo}
                maxWidth={i18n.language == "en" ? "310px" : "318px"}
            />
            <div className={styles.LoadingIco}>
                <img src={play} className={styles.LoadingIco_Play} alt="" />
                <img src={i18n.language == "ru" ? roundTextRu : roundTextEn} className={styles.LoadingIco_Round} alt="" />
            </div>
        </div>
        </>
    );
}
 
export default LoadingPage;