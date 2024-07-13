import { useNavigate } from 'react-router-dom';
import { success } from '../../assets';
import Button from '../ui/Button/Button';
import InfoBlock from '../ui/InfoBlock/InfoBlock';
import Status from '../ui/Status/Status';
import styles from './StatusPage.module.scss'


const StatusPage = () => {
    const nav = useNavigate()
    return (
        <>
        <div className={styles.StatusPage}>
            <div className={styles.Status}>
                <InfoBlock
                    icon={success}
                    title={"Олата прошла успешно"}
                    content={"Ожидайте поступление ваучера на адрес, с которого была произведена оплата."}
                    maxWidth={"333px"}
                    contentWidth={"333px"}
                />
                <Status
                    address={"TREeCTXK...AYE6hHgK1uF"}
                    sum={9000}
                    status={"Выполенный"}
                    time={"01.07.2024 / 21:59:33"}
                />
            </div>
            <Button text={"Вернуться на главную страницу"} onClick={() => {nav("/main")}} />
        </div>
        </>
    );
}
 
export default StatusPage;