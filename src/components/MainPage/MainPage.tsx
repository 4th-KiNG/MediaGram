import { useNavigate } from 'react-router-dom';
import { logo } from '../../assets';
import Button from '../ui/Button/Button';
import styles from  './MainPage.module.scss'
import InfoBlock from '../ui/InfoBlock/InfoBlock';
import FAQ from '../ui/FAQ/FAQ';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const nav = useNavigate()
    const {t} = useTranslation()
    return (
        <>
        <div className={styles.MainPage}>
            <InfoBlock
                title={t("MainPage.title")}
                icon={logo}
                maxWidth={"318px"}
                content={t("MainPage.content")}
            />
            <div className={styles.FAQBlock}>
                <FAQ
                    title={t("MainPage.FAQ")}
                    content={t("MainPage.More")}
                    onClick={() => nav("/info")}
                />
                <Button
                    text={t("MainPage.Btn")}
                    onClick={() => {nav("/voucher")}}
                />
            </div>
        </div>
        </>
    );
}
 
export default MainPage;