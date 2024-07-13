import { warning } from '../../../assets';
import styles from './Warning.module.scss'

interface IWarn{
    content: string
}

const Warning = ({content} : IWarn) => {
    return (
        <>
        <div className={styles.Warning}>
            <div className={styles.Warning_Header}>
                <img src={warning} alt="" />
                <h2>Внимание!</h2>
            </div>
            <p>{content}</p>
        </div>
        </>
    );
}
 
export default Warning;