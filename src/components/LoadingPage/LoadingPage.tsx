import { logo, play, roundText } from '../../assets';
import InfoBlock from '../ui/InfoBlock/InfoBlock';
import styles from './LoadingPage.module.scss'


const LoadingPage = () => {
    return (
        <>
        <div className={styles.LoadingPage}>
            <InfoBlock
                title={"Веб-платформа рекламной биржи №1"}
                content={"Будь в числе первых"}
                icon={logo}
                maxWidth={"318px"}
            />
            <div className={styles.LoadingIco}>
                <img src={play} className={styles.LoadingIco_Play} alt="" />
                <img src={roundText} className={styles.LoadingIco_Round} alt="" />
            </div>
        </div>
        </>
    );
}
 
export default LoadingPage;