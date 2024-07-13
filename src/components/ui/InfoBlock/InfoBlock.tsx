import styles from './InfoBlock.module.scss'
import Ico from '../Ico/Ico'


interface IInfoBlock{
    title: string,
    icon: string,
    iconColor?: string,
    content?: string,
    maxWidth: string,
    fontSize?: string,
    contentWidth?: string
}

const InfoBlock = ({
    title,
    icon,
    iconColor,
    content,
    maxWidth,
    fontSize = "28px",
    contentWidth = "283px"
}: IInfoBlock) => {
    return (
        <>
        <div className={styles.InfoBlock}
            style={{maxWidth: maxWidth}}
        >
            <Ico img={icon} color={iconColor} />
            <h2
                className={styles.InfoBlock_Title}
                style={{fontSize: fontSize}}
            >{title}</h2>
            <p
                className={styles.InfoBlock_Content}
                style={{maxWidth: contentWidth}}
            >
                {content}
            </p>
        </div>
        </>
    );
}
 
export default InfoBlock;