import { useState } from 'react';
import { questblue } from '../../assets';
import styles from './InfoPage.module.scss'
import Button from '../ui/Button/Button';
import InfoBlock from '../ui/InfoBlock/InfoBlock';
import { useNavigate } from 'react-router-dom';

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
                    title={"Почему стоит приобретать ваучеры?"}
                    icon={questblue}
                    maxWidth={"318px"}
                    fontSize={"24px"}
                />
                <div className={styles.FAQ}>
                    <FAQBlock 
                        title={"Долгосрочный потенциал роста"} 
                        content={"Возможность раннего участия в получении вознаграждений, прибыли от ликвидности и стейкинга, а также доступа к аирдропам."} 
                    />
                    <FAQBlock 
                        title={"Уникальная возможность стать одним из первых"}
                        content={"Возможность раннего участия в получении вознаграждений, прибыли от ликвидности и стейкинга, а также доступа к аирдропам."}
                    />
                    <FAQBlock 
                        title={"Возможность раннего участия"}
                        content={"Возможность раннего участия в получении вознаграждений, прибыли от ликвидности и стейкинга, а также доступа к аирдропам."}
                    />
                </div>
            </div>
            <Button text={"Получить ваучер"} onClick={() => {nav("/voucher")}} />
        </div>
        </>
    );
}
 
export default InfoPage;