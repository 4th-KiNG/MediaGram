import { quest } from '../../../assets';
import styles from './FAQ.module.scss'

interface IFAQ{
    title: string,
    content: string,
    onClick?: () => void,
    maxWidth?: string
}

const FAQ = ({title, content, onClick, maxWidth}: IFAQ) => {
    return (
        <>
        <div className={styles.FAQ} onClick={onClick}>
            <div className={styles.FAQ_Text}>
                <h3 style={{maxWidth: maxWidth}}>{title}</h3>
                <p>{content}</p>
            </div>
            <img src={quest} className={styles.FAQ_Ico} alt="" />
        </div>
        </>
    );
}
 
export default FAQ;