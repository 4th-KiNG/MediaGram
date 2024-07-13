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
    return (
        <>
        <div className={styles.FAQForm}>
            <div className={styles.FAQ_Block}>
                <img src={cross} className={styles.Cross} onClick={onClick} alt="" />
                <div className={styles.Header}>
                    <Ico img={quest} color={"linear-gradient(180deg, #0177FB 0%, #004CF4 100%)"} />
                    <h1 className={styles.Header_Title}>Как приобрести ваучеры?</h1>
                </div>
                <div className={styles.Modules}>
                    <FAQModule
                        num={1}
                        content={"Укажите количество ваучеров, кратное 10."}
                    />
                    <FAQModule
                        num={2}
                        content={'Дождитесь расчёта стоимости и нажмите "Купить".'}
                    />
                    <FAQModule
                        num={3}
                        content={'Переведите необходимое количество USDT (TON) на предоставленный адрес.'}
                    />
                    <FAQModule
                        num={4}
                        content={'Ожидайте поступление ваучера на адрес, с которого была произведена оплата.'}
                    />
                </div>
            </div>
        </div>
        </>
    );
}
 
export default FAQForm;