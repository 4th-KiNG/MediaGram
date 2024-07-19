import { useTranslation } from "react-i18next";
import styles from './LangChange.module.scss'

const LangChange = () => {
    const {i18n} = useTranslation()
    return (
        <>
        <button
            onClick={() => {
                i18n.changeLanguage(i18n.language == "ru" ? "en" : "ru")
            }}
            className={styles.LangChange}
        >
            <p>{i18n.language == "ru" ? "RU" : "EN"}</p>
        </button>
        </>
    );
}
 
export default LangChange;