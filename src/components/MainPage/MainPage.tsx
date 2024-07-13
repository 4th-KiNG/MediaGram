import { useNavigate } from 'react-router-dom';
import { logo } from '../../assets';
import Button from '../ui/Button/Button';
import styles from  './MainPage.module.scss'
import InfoBlock from '../ui/InfoBlock/InfoBlock';
import FAQ from '../ui/FAQ/FAQ';

const MainPage = () => {
    const nav = useNavigate()
    return (
        <>
        <div className={styles.MainPage}>
            <InfoBlock
                title={"Ваучеры Mediagram"}
                icon={logo}
                maxWidth={"318px"}
                content={"Ваучеры MGM созданы с целью развития уникальной рекламной экосистемы Mediagram, предлагающей инновационные решения и технологии для рынка рекламы."}
            />
            <div className={styles.FAQBlock}>
                <FAQ
                    title={"Почему стоит приобретать ваучеры?"}
                    content={"Подробнее"}
                    onClick={() => nav("/info")}
                />
                <Button text={"Получить ваучер"} onClick={() => {nav("/voucher")}} />
            </div>
        </div>
        </>
    );
}
 
export default MainPage;